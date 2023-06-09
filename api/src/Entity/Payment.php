<?php

namespace App\Entity;

use App\Repository\PaymentRepository;
use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PaymentRepository::class)]
class Payment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $bic = null;

    #[ORM\Column(length: 255)]
    private ?string $iban = null;

    #[ORM\ManyToOne]
    private ?Payer $payer = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $startFrom = null;

    public function __construct(string $bic, string $iban, string $startFrom)
    {
        $this->bic = $bic;
        $this->iban = $iban;
        $this->startFrom = DateTime::createFromFormat('d/m/Y H:i:s', $startFrom . '00:00:00');
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBic(): ?string
    {
        return $this->bic;
    }

    public function setBic(string $bic): self
    {
        $this->bic = $bic;

        return $this;
    }

    public function getIban(): ?string
    {
        return $this->iban;
    }

    public function setIban(string $iban): self
    {
        $this->iban = $iban;

        return $this;
    }

    public function getPayer(): ?Payer
    {
        return $this->payer;
    }

    public function setPayer(?Payer $payer): self
    {
        $this->payer = $payer;

        return $this;
    }

    public function getStartFrom(): ?\DateTimeInterface
    {
        return $this->startFrom;
    }

    public function setStartFrom(\DateTimeInterface $startFrom): self
    {
        $this->startFrom = $startFrom;

        return $this;
    }
}
