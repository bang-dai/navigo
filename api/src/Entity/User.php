<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User extends Payer
{
    #[ORM\Column(length: 30, nullable: true)]
    protected ?string $mobile = null;

    #[ORM\Column]
    protected ?bool $optin = null;

    #[ORM\Column]
    protected ?bool $receiveAtHome = null;

    #[ORM\Column(length: 255)]
    protected ?string $picture = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Payment $payment = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Forfait $forfait = null;

    public function getMobile(): ?string
    {
        return $this->mobile;
    }

    public function setMobile(?string $mobile): self
    {
        $this->mobile = $mobile;

        return $this;
    }

    public function isOptin(): ?bool
    {
        return $this->optin;
    }

    public function setOptin(bool $optin): self
    {
        $this->optin = $optin;

        return $this;
    }

    public function isReceiveAtHome(): ?bool
    {
        return $this->receiveAtHome;
    }

    public function setReceiveAtHome(bool $receiveAtHome): self
    {
        $this->receiveAtHome = $receiveAtHome;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getPayment(): ?Payment
    {
        return $this->payment;
    }

    public function setPayment(Payment $payment): self
    {
        $this->payment = $payment;

        return $this;
    }

    public function getForfait(): ?Forfait
    {
        return $this->forfait;
    }

    public function setForfait(?Forfait $forfait): self
    {
        $this->forfait = $forfait;

        return $this;
    }
}
