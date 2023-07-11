<?php
$data = json_decode(file_get_contents('countries.json'));

foreach($data as $item)
        echo json_encode([
                'prompt' => "On which continent is $item->country?\n\n###\n\n",
                'completion' => "$item->continent\n"
        ])."\n";