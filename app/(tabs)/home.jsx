import { useRef, useState } from 'react';
import { Image, StyleSheet, View, Text, Platform } from 'react-native';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';



export default function HomeScreen() {

  const [buildCord, setBuildCord] = useState([]);
  const [pathCord, setPathCord] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [inPath, setInPath] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const intervalIdRef = useRef(null)


  return (

    <>

      <MapView
        showsCompass={false}
        mapType="standard"
        provider={Platform.OS == "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        loadingEnabled={false}
        pitchEnabled={true}
        className="h-screen bg-[#cebc93]"
      >

      </MapView>

    </>
  );
}

