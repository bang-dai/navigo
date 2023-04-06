<?php

namespace App\DataFixtures;

use App\Entity\Forfait;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $forfaitTout = new Forfait('Toutes zones', 84.10, 925.10);
        $forfait23 = new Forfait('Zone 2-3', 76.70, 843.70);
        $forfait34 = new Forfait('Zone 3-4', 74.70, 821.70);
        $forfait45 = new Forfait('Zone 4-5', 72.90, 801.90);

        $manager->persist($forfaitTout);
        $manager->persist($forfait23);
        $manager->persist($forfait34);
        $manager->persist($forfait45);

        $manager->flush();
    }
}
