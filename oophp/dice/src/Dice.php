<?php

class Dice
{
    private $faces;
    private $total = [];

    public function __construct($faces = 6)
    {
        $this->faces = $faces;
    }

    public function roll($times = 1)
    {
        for ($i = 0; $i < $times; $i++) {
            $this->total[] = rand(1, $this->faces);
        }
        return $this->total;
    }

    public function getTotal()
    {
        return array_sum($this->total);
    }

    public function getAverage()
    {
        return round($this->getTotal() / count($this->total), 2);
    }

    public function __destruct()
    {
        // echo __METHOD__;
    }

}
