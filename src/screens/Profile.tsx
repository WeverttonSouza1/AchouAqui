  import { FontAwesome } from '@expo/vector-icons';
  import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

  type ProfileRowProps = {
    icon: React.ComponentProps<typeof FontAwesome>['name'];
    label: string;
    value?: string;
    onPress?: () => void;
  };

  function ProfileRow({ icon, label, value, onPress }: ProfileRowProps) {
    return (
      <TouchableOpacity style = {styles.profileRow} onPress = {onPress} activeOpacity = {0.7}>
        <FontAwesome name = {icon} size = {25} color = "#202124" style = {styles.rowIcon} />
        <Text style = {styles.rowLabel}>{label}</Text>
        {value ? <Text style = {styles.rowValue}>{value}</Text> : null}
        <FontAwesome name = "chevron-right" size = {16} color = "#202124" />
      </TouchableOpacity>
    );
  }

  export default function ProfileScreen({ navigation }: any) {
    return (
      <View style = {styles.root}>
        <View style = {styles.header}>
          <FontAwesome name = "search" size = {25} color = "#2867ed" />
          <Text style = {styles.title}>Meu perfil</Text>
        </View>

        <View style = {styles.profileSummary}>
          <View style = {styles.avatar}>
            <FontAwesome name = "user" size = {70} color = "#aeb2b8" />
          </View>
          <Text style = {styles.guestName}>Convidada</Text>
        </View>

        <View style = {styles.divider} />

        <View style = {styles.options}>
          <ProfileRow icon = "user" label = "Editar perfil" />
          <ProfileRow icon = "cog" label = "Configurações" />
          <ProfileRow icon = "paint-brush" label = "Tema" />
          <ProfileRow icon = "bell-o" label = "Notificações" />
          <ProfileRow icon = "commenting-o" label = "Idioma" value = "Português" />
          <ProfileRow icon = "lock" label = "Política de privacidade" />
          <ProfileRow icon = "info-circle" label = "Contato" />
          <ProfileRow icon = "sign-in" label = "Login" onPress = {() => navigation.navigate('Login')} />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    root: {
      backgroundColor: '#ffffff',
      flex: 1,
      paddingHorizontal: 8,
      paddingTop: 26,
    },

    header: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: 22,
    },

    title: {
      color: '#171717',
      fontSize: 30,
      fontWeight: '700',
    },

    profileSummary: {
      alignItems: 'center',
      marginTop: 28,
    },

    avatar: {
      alignItems: 'center',
      backgroundColor: '#e1e3e6',
      borderRadius: 86,
      height: 172,
      justifyContent: 'center',
      overflow: 'hidden',
      width: 172,
    },

    guestName: {
      color: '#171717',
      fontSize: 26,
      fontWeight: '600',
      marginTop: 14,
    },

    divider: {
      backgroundColor: '#e5e5e5',
      height: 1,
      marginTop: 28,
    },

    options: {
      marginTop: 12,
    },

    profileRow: {
      alignItems: 'center',
      flexDirection: 'row',
      minHeight: 66,
      paddingVertical: 8,
    },

    rowIcon: {
      textAlign: 'center',
      width: 35,
    },

    rowLabel: {
      color: '#202124',
      flex: 1,
      fontSize: 23,
      marginLeft: 16,
    },

    rowValue: {
      color: '#202124',
      fontSize: 20,
      marginRight: 20,
    },
  });
  