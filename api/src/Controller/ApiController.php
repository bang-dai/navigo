<?php

namespace App\Controller;

use App\Entity\Payment;
use App\Entity\User;
use App\Repository\ForfaitRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ApiController extends AbstractController
{
    #[Route('/api/forfaits', name: 'api_forfaits', methods: ['GET'])]
    public function getForfaits(ForfaitRepository $forfaitRepository): JsonResponse
    {
        return $this->json($forfaitRepository->findAll());
    }

    #[Route('/api/subscription', name: 'api_subscription', methods: ['POST'])]
    public function subscription(
        Request $request,
        SerializerInterface $serializer,
        EntityManagerInterface $em,
        ValidatorInterface $validator,
        ForfaitRepository $forfaitRepository
    ): Response {
        $json = $request->getContent();
        if (empty($json)) {
            return new Response('Body cannot be empty.', Response::HTTP_BAD_REQUEST);
        }
        try {
            $user = $serializer->deserialize($json, User::class, 'json');
            $data = json_decode($json, true);

            if (
                empty($data['idForfait'])
                || empty($data['startFrom'])
                || empty($data['civility'])
                || empty($data['receivePlace'])
                || empty($data['iban'])
                || empty($data['bic'])
            ) {
                return $this->json('Forfait / Début forfait / Civilité / Réception Passe / IBAN / BIC... manquant.', Response::HTTP_BAD_REQUEST);
            }

            //bind boolean for radio choice
            $user->setIsMan($data['civility'] === 'M' ? true : false);
            $user->setReceiveAtHome($data['receivePlace'] === 'home' ? true : false);

            //bind forfait
            $forfait = $forfaitRepository->find($data['idForfait']);
            if (!$forfait) {
                return $this->json('Id Forfait introuvable.', Response::HTTP_BAD_REQUEST);
            }
            $user->setForfait($forfait);

            //bind payment
            $payment = new Payment($data['bic'], $data['iban'], $data['startFrom']);
            $user->setPayment($payment);

            $errors = $validator->validate($user);
            if (count($errors) > 0) {
                return $this->json($errors, Response::HTTP_BAD_REQUEST);
            }

            $em->persist($user);
            $em->flush();

            return $this->json($user, Response::HTTP_CREATED);
        } catch (NotEncodableValueException $ex) {
            return $this->json($ex->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
