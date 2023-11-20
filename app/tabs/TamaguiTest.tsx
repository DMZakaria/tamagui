import {
  Button,
  Image,
  ScrollView,
  Stack,
  Text,
  View,
  XStack,
  YStack
} from "tamagui";

export function SimpleTamaguiList(props) {
  return (
    <ScrollView>
      {Array.from({ length: 100 }).map((_, i) => (
        <View key={i}>
          <Text>{i}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export function CardTamaguiPlus(props) {
  return (
    <XStack
      justifyContent="space-around"
      marginTop={10}
    >
      <Stack>
        <Image
          source={{
            // eslint-disable-next-line react/prop-types
            uri: props?.uri ?? ""
          }}
          width={100}
          height={100}
          borderRadius={50}
        />
      </Stack>
      <YStack justifyContent="center">
        <Text
          fontSize={20}
          fontWeight={"bold"}
        >
          Hello world
        </Text>
        <Text>Hello world</Text>
      </YStack>
      <Stack
        justifyContent="center"
        alignItems="center"
      >
        <Button
          size="$3"
          variant="outlined"
        >
          Button
        </Button>
      </Stack>
    </XStack>
  );
}

export function TamaguiList(props) {
  return (
    <ScrollView>
      {Array.from({ length: 100 }).map((_, i) => (
        <CardTamaguiPlus
          key={i}
          uri={
            "https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      ))}
    </ScrollView>
  );
}
