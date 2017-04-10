<?php

class Histogram
{
    private $arr = array();
    private $result = array();

    public function __construct($rolls)
    {
        $this->arr = $rolls;
    }

    public function getResult()
    {
        foreach ($this->arr as $key) {
            if (!key_exists($key, $this->result)) {
                $this->result[$key] = "*";
            } else {
                $this->result[$key] .= "*";
            }
        }

        asort($this->result);
        return $this->result;
    }
}
