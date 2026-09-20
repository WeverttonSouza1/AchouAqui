import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Share, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function ItemDetailsScreen({ navigation }: any) {
  const sharePost = () => {
    Share.share({ message: 'Confira este anúncio: Nome da publicação' });
  };

  return (
    <>
      <StatusBar hidden />
      <ScrollView contentContainerStyle = {styles.root} keyboardShouldPersistTaps = "handled" keyboardDismissMode = "on-drag">
        <View style = {styles.imageContainer}>
          <FontAwesome name = "image" size = {330} color = '#4c288f' />
          <TouchableOpacity style = {[styles.imageAction, styles.backImageAction]} onPress = {() => navigation.goBack()}>
            <FontAwesome name = "arrow-left" size = {24} color = "#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.imageAction, styles.shareImageAction]} onPress = {sharePost}>
            <FontAwesome name = "share" size = {22} color = "#ffffff" />
          </TouchableOpacity>
        </View>

        <View style = {[styles.container, styles.titleContainer]}>
            <Text style = {styles.title}>Nome da publicação</Text>
        </View>
        
        <View style = {styles.infoRow}>
          <View style = {styles.statusRow}>
            <FontAwesome name = "search" size = {16} color = '#ffa200' />
            <Text style = {styles.subtitle}> Perdido/Achado</Text>
          </View>
            
          <View style = {styles.rewardContainer}>
            <Text style = {styles.rewardContainerText}>Recompensa: R$ 100.00</Text>
          </View>
        </View>

        {/* 
        <View style = {styles.infoRow}>
          <View style = {styles.containerRow}>
          <Text style = {styles.boldSubtitle}>Categoria: </Text>
          <Text>&&&&</Text>
          </View>
        </View> 
        */}

        <View style = {styles.contactRow}>
          <View style = {styles.avatarRegisterDiv}>
            <FontAwesome name = "user" size = {30} color = "#aeb2b8" />
          </View>
          <View>
            <Text style = {styles.name}>Nome do usuário</Text>
            <Text style = {styles.subtitle}>email@email.com</Text>
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesome name = "phone" size = {30} color = "#aeb2b8" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style = {styles.descriptionContainer}>
            <Text style = {styles.sectionTitle}>Descrição</Text>
          </View>
          <View style = {styles.descriptionContainer}>
            <Text style = {styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nunc.</Text>
          </View>
          <View style = {styles.descriptionContainer}>
            <Text style = {styles.boldSubtitle}>Adicionado: 01/01/2023</Text>
          </View>
        </View>

        <View style = {styles.locationContainer}>
          <View style = {{ marginRight: 8 }}>
            <FontAwesome name = "map-marker" size = {26} color = '#4c288f' />
          </View>
          <View>
            <Text style = {styles.subtitleLocalization}>40626-541 . Travessa Atlantica, 5091 . Caminho das Arvores</Text>
          </View>
        </View>
        <View style = {styles.locationCard}>
          <Text style = {styles.locationTitle}>LOCALIZAÇÃO NO MAPA</Text>
          <View style = {styles.mapContainer}>
            <FontAwesome name = "map" size = {72} color = '#64748B' />
            <FontAwesome name = "map-marker" size = {46} color = '#E04B4B' style = {styles.mapMarker} />
          </View>
        </View>

        <View style = {styles.reportContainer}>
          <TouchableOpacity style = {styles.reportButton}>
            <FontAwesome name = "flag-o" size = {21} color = "#E04B4B" />
            <Text style = {styles.reportButtonText}>Reportar anúncio</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingBottom: 24,
  },

  imageContainer: {
    position: 'relative',
    backgroundColor: 'lightgray',
    height: 450,
    width: '110%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  imageAction: {
    position: 'absolute',
    top: 18,
    padding: 10,
  },

  backImageAction: {
    left: 14,
    paddingTop: 32,
  },

  shareImageAction: {
    right: 14,
    paddingTop: 32,
  },

  container: {
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
  },

  titleContainer: {
    alignItems: 'flex-start',
  },
  
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0b0b0c',
    textAlign: 'left',
  },
  
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#67676d',
  },

  sectionTitle: {
    alignSelf: 'flex-start',
    color: '#222',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 15,
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  
  boldSubtitle: {
    fontSize: 16,
    color: '#0b0a0a',
    fontWeight: '900',
  },

  subtitleLocalization: {
    fontSize: 16,
    color: '#555',
    marginRight: 15,
  },

  infoRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '96%',
  },

  contactRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '100%',
    borderTopColor: '#e0e0e070',
    borderTopWidth: 1,
    paddingTop: 12,
  },

  statusRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  rewardContainer: {
    alignItems: 'flex-end',

  },

  rewardContainerText: {
    color: '#2ec321',
  },
  
  avatarRegisterDiv: {
    alignItems: 'center',
    backgroundColor: '#e1e3e6',
    borderRadius: 26,
    height: 45,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 45,
  },

  descriptionContainer: {
    marginBottom: 15,
    width: '100%',
  },

  locationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderRadius: 22,
    borderWidth: 1,
    marginTop: 10,
    padding: 16,
    width: '100%',
  },

  locationTitle: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.6,
    marginBottom: 10,
  },

  mapContainer: {
    alignItems: 'center',
    backgroundColor: '#DCE5F0',
    borderRadius: 14,
    height: 180,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },

  mapMarker: {
    position: 'absolute',
  },

  reportContainer: {
    marginTop: 16,
    width: '100%',
  },

  reportButton: {
    alignItems: 'center',
    backgroundColor: '#FFF8F8',
    borderColor: '#F8D7DA',
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
  },

  reportButtonText: {
    color: '#E04B4B',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
