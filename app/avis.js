// AvisList.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { fetchAvis } from './api';

const AvisList = () => {
    const [Avis, setAvis] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Récupérer les films au chargement du composant
        const loadAvis = async () => {
            try {
                const data = await fetchAvis();
                setAvis(data['hydra:member']); // API Platform retourne les objets sous `hydra:member`
            } catch (error) {
                console.error("Erreur de chargement des films :", error);
            } finally {
                setLoading(false);
            }
        };

        loadAvis();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View>
            <FlatList
                data={Avis}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default AvisList;
