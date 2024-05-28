import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icon for bike pump stations
const bikePumpIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Index = () => {
  const bikePumpStations = [
    { id: 1, name: "Pump Station 1", position: [59.3293, 18.0686] },
    { id: 2, name: "Pump Station 2", position: [59.3326, 18.0649] },
    { id: 3, name: "Pump Station 3", position: [59.3340, 18.0700] },
  ];

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="blue.500" w="100%" p={4} color="white">
        <Heading as="h1" size="lg" textAlign="center">
          Stockholm Bike Pump Stations
        </Heading>
      </Box>
      <VStack spacing={4} mt={4}>
        <Box w="100%" h="80vh">
          <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {bikePumpStations.map(station => (
              <Marker key={station.id} position={station.position} icon={bikePumpIcon}>
                <Popup>{station.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;