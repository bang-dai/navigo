<?php

namespace App\Entity;

use App\Repository\ForfaitRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ForfaitRepository::class)]
class Forfait
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?float $priceByMonth = null;

    #[ORM\Column]
    private ?float $priceByYear = null;


    public function __construct(string $name, float $priceByMonth, float $priceByYear)
    {
        $this->name = $name;
        $this->priceByMonth = $priceByMonth;
        $this->priceByYear = $priceByYear;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPriceByMonth(): ?float
    {
        return $this->priceByMonth;
    }

    public function setPriceByMonth(float $priceByMonth): self
    {
        $this->priceByMonth = $priceByMonth;

        return $this;
    }

    public function getPriceByYear(): ?float
    {
        return $this->priceByYear;
    }

    public function setPriceByYear(float $priceByYear): self
    {
        $this->priceByYear = $priceByYear;

        return $this;
    }
}
