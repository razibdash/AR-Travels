const axios=require('axios')

export async function getAddressCoordinates(address, apiKey) {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      const location = data.results[0].geometry.location;
      return {
        latitude: location.lat,
        longitude: location.lng,
      };
    } else {
      console.error("Geocoding error:", data.status, data.error_message);
      return null;
    }
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
}
