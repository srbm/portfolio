<?php
// This file is placed in the root folder of your project.
// Update the path for the json file accordingly.

function fetchMoonPhase($apiKey, $lat, $lng, $end) {
    $url = "https://api.stormglass.io/v2/astronomy/point?lat=$lat&lng=$lng&end=$end";

    $curl = curl_init($url);

    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'X-Requested-With: XMLHttpRequest',
        'Authorization: ' . $apiKey
    ]);

    $response = curl_exec($curl);

    if (curl_errno($curl)) {
        $error_msg = curl_error($curl);
        curl_close($curl);
        error_log('Curl error while fetching moon phase data: ' . $error_msg);
        return null;
    }
    
    curl_close($curl);

    return $response;
}

$date = new DateTime();
$end = $date->format('Y-m-d');
$lat = 45.3;
$lng = 122.3;
$apiKey = 'KEY'; // Stormglass API key https://dashboard.stormglass.io/

$moonPhaseData = fetchMoonPhase($apiKey, $lat, $lng, $end);

if ($moonPhaseData !== null) {
    file_put_contents('/home/lexidqvm/shawnrbmeyer.com/moon_phase_data.json', $moonPhaseData);
} else {
    echo "Failed to fetch moon phase data.";
}
?>