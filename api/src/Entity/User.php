<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\AttributeOverride;
use Doctrine\ORM\Mapping\AttributeOverrides;
use Doctrine\ORM\Mapping\Column;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[AttributeOverrides(
    [
        new AttributeOverride(
            name: "mobile",
            column: new Column(name: "mobile", type: "string", length: 30, nullable: true)
        )
    ]
)]
class User extends Payer
{
    #[ORM\Column]
    #[Assert\NotNull()]
    protected ?bool $optin = null;

    #[ORM\Column]
    protected ?bool $receiveAtHome = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank()]
    protected ?string $picture = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Payment $payment = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Forfait $forfait = null;

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
