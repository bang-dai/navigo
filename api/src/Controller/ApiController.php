<?php

namespace App\Controller;

use App\Repository\ForfaitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ApiController extends AbstractController
{
    #[Route('/api/forfaits', name: 'api_forfaits', methods: ['GET'])]
    public function getForfaits(ForfaitRepository $forfaitRepository): JsonResponse
    {
        return $this->json($forfaitRepository->findAll());
    }

    #[Route('/api/subscription', name: 'api_subscription', methods: ['POST'])]
    public function subscription(Request $request): Response
    {
        $json = $request->getContent();
        if (empty($json)) {
            return new Response('Body cannot be empty', Response::HTTP_BAD_REQUEST);
        }
        try {
            return $this->json([], Response::HTTP_CREATED);
        } catch (NotEncodableValueException $ex) {
            return $this->json($ex->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
