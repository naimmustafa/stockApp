<View style={{ marginTop: 22 }}>
  <View>
    <Text>Hello World!</Text>

    <TouchableHighlight
      onPress={() => {
        this.setModalVisible(!this.state.modalVisible);
      }}
    >
      <Text>Hide Modal</Text>
    </TouchableHighlight>
  </View>
</View>
