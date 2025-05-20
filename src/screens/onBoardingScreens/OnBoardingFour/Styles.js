import { scale, verticalScale } from 'react-native-size-matters';

import { COLORS } from '../../../../services/colors';
import { FONTS } from '../../../../services/fonts';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Roboto-Regular',
    fontSize: scale(11),
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'right',
    color: COLORS.heading
  },
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    padding: 15,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  logo: {
    height: 41,
    width: 270,
  },
  centerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marVertical: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(15),
  },
  marVertical1: {
    marginTop: verticalScale(0),
    marginBottom: verticalScale(15),
  },
  heading: {
    fontFamily: 'Roboto-ExtraBold',
    fontSize: 22,
    // fontWeight: '900',
    lineHeight: 28,
    letterSpacing: -0.01,
    textAlign: 'center',
    color: COLORS.heading,
    marginHorizontal: 40,

  },
  subHeading: {
    // fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '800',
    lineHeight: 19,
    letterSpacing: -0.01,
    textAlign: 'center',
    color: COLORS.heading,
  },
  subheading: {
    fontFamily: FONTS.BalooBhai2Regular,
    fontSize: scale(13),
    color: COLORS.secondary,
    marginBottom: verticalScale(15),
  },
  customBtn: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: verticalScale(14),
  },
  forgotText: {
    fontFamily: FONTS.BalooBhai2Medium,
    fontSize: scale(14),
    color: COLORS.black,
    letterSpacing: 0.3,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  footBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(15),
    gap: 4,
  },
  footText1: {
    fontFamily: FONTS.BalooBhai2Regular,
    fontSize: scale(14),
    color: COLORS.black,
    letterSpacing: 0.3,
  },
  footText2: {
    fontFamily: FONTS.BalooBhai2Bold,
    fontSize: scale(14),
    color: COLORS.primary,
    letterSpacing: 0.3,
    textDecorationLine: 'underline',
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: 1, // Android only
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { Styles };
