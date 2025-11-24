<?php
// This file is placed in the root folder of your project.
// Update the path for the json file accordingly.

function fetchMoonPhase($apiKey, $lat, $lng, $start, $end) {
    $url = "https://api.stormglass.io/v2/astronomy/point?lat=$lat&lng=$lng&start=$start&end=$end";

    $curl = curl_init($url);

    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'X-Requested-With: XMLHttpRequest',
        'Authorization: e4605b76-b8da-11ef-8d8d-0242ac130003-e4605be4-b8da-11ef-8d8d-0242ac130003'
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
$start = $date->format('Y-m-d');
$date->modify('+7 days');
$end = $date->format('Y-m-d');
$lat = 45.3;
$lng = 122.3;
$apiKey = 'KEY'; // Stormglass API key https://dashboard.stormglass.io/

$moonPhaseData = fetchMoonPhase($apiKey, $lat, $lng, $start, $end);

if ($moonPhaseData !== null) {
    file_put_contents('/home/lexidqvm/shawnrbmeyer.com/moon_phase_data.json', $moonPhaseData);
} else {
    error_log("Failed to fetch moon phase data.");
}
?>