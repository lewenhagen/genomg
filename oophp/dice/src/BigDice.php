<?php

class BigDice extends Dice
{
    const FACES = 128;

    public function __construct()
    {
        parent::__construct(self::FACES);
    }
}
