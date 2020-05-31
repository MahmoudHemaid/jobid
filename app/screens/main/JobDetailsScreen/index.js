import React, { useCallback, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import TextButton from "../../../components/buttons/TextButton";
import { Colors, Layout, Fonts } from "../../../constants";
import {
  SCREEN_KEYS,
  DUMP_IMAGES,
  PERSON_IMAGE,
} from "../../../utilities/Constants";
import Screen from "../../Screen";
import { useSafeArea } from "react-native-safe-area-context";
import HeaderView from "../../../components/views/HeaderView";
import MessageIcon from "../../../assets/images/map/message_icon.svg";
import HexagonImage from "../../../components/images/HexagonImage";
import MakeBidButton from "../../../components/buttons/MakeBidButton";
import StyledText from "../../../components/StyledText";
import SectionView from "../../../components/views/SectionView";
import ImagesView from "./ImagesView";
import JobSpecifications from "./JobSpecifications";
import PersonWithRating from "../../../components/views/PersonWithRating";

export default function JobDetailsScreen(props) {
  const insets = useSafeArea();
  const { item = {} } = props.route?.params ?? {};

  const onMessagePress = () => {};
  const onMakeBidPress = () => {
    props.navigation.navigate(SCREEN_KEYS.MAKE_OFFER);
  };
  const onPersonPress = () => {};
  return (
    <Screen containerStyle={{ backgroundColor: Colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderView
          bold
          isBack={true}
          color={Colors.primaryColor}
          title={"Job details"}
          onLeftPress={props.navigation.goBack}
          RightIcon={MessageIcon}
          onRightPress={onMessagePress}
        />
        <View style={styles.topImageContainer}>
          <HexagonImage
            touchable
            size={Layout.window.width * 0.25}
            source={{ uri: item?.uri }}
          />
          <StyledText
            center
            color={Colors.lightColor}
            children={item.distance?.toUpperCase()}
          />
        </View>
        <MakeBidButton onPress={onMakeBidPress} style={styles.makeBidButton} />

        <SectionView title={"Photos"}>
          <ImagesView images={DUMP_IMAGES} />
        </SectionView>
        <SectionView title={"Job specifications"}>
          <JobSpecifications item={item} />
        </SectionView>
        <SectionView title={"Posted By"}>
          <PersonWithRating
            source={{
              uri: PERSON_IMAGE,
            }}
            name={"Mahmoud Hemaid"}
            rating={4.2}
            touchable
            onPress={onPersonPress}
          />
          <TextButton
            onPress={onMakeBidPress}
            color={Colors.secondaryColor}
            children={"Make a bid"}
          />
        </SectionView>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topImageContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: Fonts.medium,
    color: Colors.lightColor,
    marginTop: Layout.margin.normal,
    marginBottom: Layout.margin.small,
  },
  makeBidButton: {
    alignSelf: "flex-end",
    marginVertical: Layout.margin.xLarge,
  },
});
