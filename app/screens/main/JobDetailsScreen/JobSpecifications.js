import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Layout, Styles, Fonts, Colors } from "../../../constants";
import PropTypes from "prop-types";
import StyledText from "../../../components/StyledText";
import moment from "moment";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {},
  title: {
    color: Colors.lightColor,
  },
  text: {
    fontFamily: Fonts.type.medium,
    color: Colors.lightColor,
    fontSize: Fonts.size.medium,
  },
  textBox: {
    ...Styles.shadow.tiny,
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.lightGray,
    padding: Layout.padding.small,
    marginTop: Layout.margin.small,
    marginBottom: Layout.margin.large,
  },
  timeBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeBox: {
    width: Layout.window.width * 0.2,
    alignItems: "center",
    marginRight: Layout.margin.large,
  },
  dots: {
    marginBottom: Layout.margin.large,
    marginTop: Layout.margin.small,
  },
  booleanText: {
    padding: Layout.padding.small,
  },
});

const TimeBox = ({ date }) => {
  return (
    <View style={styles.timeBoxContainer}>
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.black} />
      <View style={[styles.textBox, styles.timeBox, { marginRight: 0 }]}>
        <StyledText style={styles.text} children={date.format("hh")} />
      </View>
      <Entypo
        style={styles.dots}
        name="dots-two-vertical"
        size={32}
        color={Colors.lightColor}
      />
      <View style={[styles.textBox, styles.timeBox]}>
        <StyledText style={styles.text} children={date.format("mm")} />
      </View>
      <View style={[styles.textBox, styles.timeBox]}>
        <StyledText style={styles.text} children={date.format("A")} />
      </View>
    </View>
  );
};

export default function JobSpecifications(props) {
  const { item = {} } = props;

  const dateMoment = moment();

  return (
    <View style={styles.container}>
      <StyledText bold style={styles.title} children={"Job title:"} />
      <View style={styles.textBox}>
        <StyledText style={styles.text} children={item?.title} />
      </View>
      <StyledText
        bold
        style={styles.title}
        children={"Brief description of the job:"}
      />
      <View style={styles.textBox}>
        <StyledText style={styles.text} children={item.details} />
      </View>
      <StyledText bold style={styles.title} children={"Date:"} />
      <View style={styles.textBox}>
        <StyledText
          style={styles.text}
          children={moment(item.date).format("MMMM Mo")}
        />
      </View>
      <StyledText bold style={styles.title} children={"From time:"} />
      <TimeBox date={dateMoment} />
      <StyledText bold style={styles.title} children={"To time:"} />
      <TimeBox date={dateMoment} />
      <StyledText bold style={styles.title} children={"Tools needed?"} />
      <StyledText
        bold
        color={Colors.purple}
        style={styles.booleanText}
        children={item.isToolsRequired ? "Yes" : "No"}
      />
    </View>
  );
}

// PropTypes.oneOf([true, false, undefined])
JobSpecifications.propTypes = {};

JobSpecifications.defaultProps = {};
