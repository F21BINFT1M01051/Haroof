import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {parsePhoneNumberFromString} from 'libphonenumber-js';
import { COLORS } from '../../services/colors';
export default function CustomPhoneInput(props) {
  const {width, height} = Dimensions.get('window');
  const [code, setCode] = useState();


  const dialCodeToCountryCode = {
    '+93': 'AF',
    '+355': 'AL',
    '+213': 'DZ',
    '+1-684': 'AS',
    '+376': 'AD',
    '+244': 'AO',
    '+1-264': 'AI',
    '+672': 'AQ',
    '+1-268': 'AG',
    '+54': 'AR',
    '+374': 'AM',
    '+297': 'AW',
    '+61': 'AU',
    '+43': 'AT',
    '+994': 'AZ',
    '+1-242': 'BS',
    '+973': 'BH',
    '+880': 'BD',
    '+1-246': 'BB',
    '+375': 'BY',
    '+32': 'BE',
    '+501': 'BZ',
    '+229': 'BJ',
    '+1-441': 'BM',
    '+975': 'BT',
    '+591': 'BO',
    '+387': 'BA',
    '+267': 'BW',
    '+47': 'BV',
    '+55': 'BR',
    '+246': 'IO',
    '+1-284': 'VG',
    '+673': 'BN',
    '+359': 'BG',
    '+226': 'BF',
    '+257': 'BI',
    '+855': 'KH',
    '+237': 'CM',
    '+1': 'CA',
    '+238': 'CV',
    '+599': 'BQ',
    '+1-345': 'KY',
    '+236': 'CF',
    '+235': 'TD',
    '+56': 'CL',
    '+86': 'CN',
    '+61': 'CX',
    '+61': 'CC',
    '+57': 'CO',
    '+269': 'KM',
    '+682': 'CK',
    '+506': 'CR',
    '+385': 'HR',
    '+53': 'CU',
    '+599': 'CW',
    '+357': 'CY',
    '+420': 'CZ',
    '+243': 'CD',
    '+45': 'DK',
    '+253': 'DJ',
    '+1-767': 'DM',
    '+1-809': 'DO',
    '+593': 'EC',
    '+20': 'EG',
    '+503': 'SV',
    '+240': 'GQ',
    '+291': 'ER',
    '+372': 'EE',
    '+268': 'SZ',
    '+251': 'ET',
    '+500': 'FK',
    '+298': 'FO',
    '+679': 'FJ',
    '+358': 'FI',
    '+33': 'FR',
    '+594': 'GF',
    '+689': 'PF',
    '+262': 'TF',
    '+241': 'GA',
    '+220': 'GM',
    '+995': 'GE',
    '+49': 'DE',
    '+233': 'GH',
    '+350': 'GI',
    '+30': 'GR',
    '+299': 'GL',
    '+1-473': 'GD',
    '+590': 'GP',
    '+1-671': 'GU',
    '+502': 'GT',
    '+44-1481': 'GG',
    '+224': 'GN',
    '+245': 'GW',
    '+592': 'GY',
    '+509': 'HT',
    '+672': 'HM',
    '+504': 'HN',
    '+36': 'HU',
    '+354': 'IS',
    '+91': 'IN',
    '+62': 'ID',
    '+98': 'IR',
    '+964': 'IQ',
    '+353': 'IE',
    '+44-1624': 'IM',
    '+972': 'IL',
    '+39': 'IT',
    '+225': 'CI',
    '+1-876': 'JM',
    '+81': 'JP',
    '+44-1534': 'JE',
    '+962': 'JO',
    '+7': 'KZ',
    '+254': 'KE',
    '+383': 'XK',
    '+965': 'KW',
    '+996': 'KG',
    '+856': 'LA',
    '+371': 'LV',
    '+961': 'LB',
    '+266': 'LS',
    '+231': 'LR',
    '+218': 'LY',
    '+423': 'LI',
    '+370': 'LT',
    '+352': 'LU',
    '+853': 'MO',
    '+389': 'MK',
    '+261': 'MG',
    '+265': 'MW',
    '+60': 'MY',
    '+960': 'MV',
    '+223': 'ML',
    '+356': 'MT',
    '+692': 'MH',
    '+596': 'MQ',
    '+222': 'MR',
    '+230': 'MU',
    '+262': 'YT',
    '+52': 'MX',
    '+691': 'FM',
    '+373': 'MD',
    '+377': 'MC',
    '+976': 'MN',
    '+382': 'ME',
    '+1-664': 'MS',
    '+212': 'MA',
    '+258': 'MZ',
    '+95': 'MM',
    '+264': 'NA',
    '+674': 'NR',
    '+977': 'NP',
    '+31': 'NL',
    '+687': 'NC',
    '+64': 'NZ',
    '+505': 'NI',
    '+227': 'NE',
    '+234': 'NG',
    '+683': 'NU',
    '+672': 'NF',
    '+850': 'KP',
    '+1-670': 'MP',
    '+47': 'NO',
    '+968': 'OM',
    '+92': 'PK',
    '+680': 'PW',
    '+970': 'PS',
    '+507': 'PA',
    '+675': 'PG',
    '+595': 'PY',
    '+51': 'PE',
    '+63': 'PH',
    '+64': 'PN',
    '+48': 'PL',
    '+351': 'PT',
    '+1-787': 'PR',
    '+974': 'QA',
    '+242': 'CG',
    '+40': 'RO',
    '+7': 'RU',
    '+250': 'RW',
    '+262': 'RE',
    '+590': 'BL',
    '+290': 'SH',
    '+1-869': 'KN',
    '+1-758': 'LC',
    '+590': 'MF',
    '+508': 'PM',
    '+1-784': 'VC',
    '+685': 'WS',
    '+378': 'SM',
    '+966': 'SA',
    '+221': 'SN',
    '+381': 'RS',
    '+248': 'SC',
    '+232': 'SL',
    '+65': 'SG',
    '+1-721': 'SX',
    '+421': 'SK',
    '+386': 'SI',
    '+677': 'SB',
    '+252': 'SO',
    '+27': 'ZA',
    '+500': 'GS',
    '+82': 'KR',
    '+211': 'SS',
    '+34': 'ES',
    '+94': 'LK',
    '+249': 'SD',
    '+597': 'SR',
    '+47': 'SJ',
    '+46': 'SE',
    '+41': 'CH',
    '+963': 'SY',
    '+239': 'ST',
    '+886': 'TW',
    '+992': 'TJ',
    '+255': 'TZ',
    '+66': 'TH',
    '+670': 'TL',
    '+228': 'TG',
    '+690': 'TK',
    '+676': 'TO',
    '+1-868': 'TT',
    '+216': 'TN',
    '+90': 'TR',
    '+993': 'TM',
    '+1-649': 'TC',
    '+688': 'TV',
    '+256': 'UG',
    '+380': 'UA',
    '+971': 'AE',
    '+44': 'GB',
    '+1': 'US',
    '+1': 'UM',
    '+1-340': 'VI',
    '+598': 'UY',
    '+998': 'UZ',
    '+678': 'VU',
    '+39': 'VA',
    '+58': 'VE',
    '+84': 'VN',
    '+681': 'WF',
    '+212': 'EH',
    '+967': 'YE',
    '+260': 'ZM',
    '+263': 'ZW',
    '+686': 'KI',
    '+852': 'HK',
    '+358': 'AX'
  };
 

  const {
    setCountryCode,
    setPhone,
    phone,
    setModalVisible,
    style,
    countryCode,
    setValidate,
    modalVisible,
  } = props;

  // console.log('phone input code.......', countryCode);
  const phoneInputRef = useRef(null);

  const validatePhoneNumber = (countryCode, code) => {
    const phoneNumber = parsePhoneNumberFromString(countryCode, code);
    return phoneNumber?.isValid();
  };

  useEffect(() => {
    if (phone) {
      setValidate(validatePhoneNumber(`${countryCode} ${phone}`, code));
    }
  }, [phone]);

  // console.log("codeeeeeee,,,.", code)

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 16,
          width: width * 0.88,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.23)',
          borderRadius: 10,
          height: 60,
          backgroundColor: COLORS.backgroundColor,
        },
        style,
      ]}>
      <PhoneInput
        ref={phoneInputRef} // Add ref to PhoneInput
        defaultCode={countryCode ? dialCodeToCountryCode[countryCode] : "DE"}
        value={phone}
        onChangeText={setPhone}
        // onChangeFormattedText={text => setCountryCode(text)}
        onChangeCountry={t =>
          // console.log(t)
          setCountryCode(`+${t.callingCode[0]}`)
        }
        containerStyle={{
          width: width * 0.55,
          height: 50,
          fontSize: 10,
          backgroundColor: COLORS.backgroundColor,
          borderRadius: 10,
        }}
        textContainerStyle={{
          paddingVertical: 0,
          fontSize: 13,
          paddingHorizontal: 0,
          backgroundColor: COLORS.backgroundColor,
        }}
        textInputStyle={{
          fontSize: 15,
          marginLeft: -10,
          backgroundColor: COLORS.backgroundColor,
          paddingVertical: 0,
          height: 50,
          color: 'rgba(255, 255, 255, 0.87)',
          fontWeight: '400',
          fontFamily: 'Roboto-Regular',
        }}
        codeTextStyle={{
          backgroundColor: COLORS.backgroundColor,
          borderColor: COLORS.backgroundColor,
          fontSize: 13,
          paddingVertical: 14.5,
          alignSelf: 'center',
          color: 'rgba(255, 255, 255, 0.87)',
          fontWeight: '400',
          fontFamily: 'Roboto-Regular',
          lineHeight: 24,
          paddingLeft: 10,
        }}
        textInputProps={{
          placeholder: '',
          color: 'rgba(255, 255, 255, 0.87)',
          maxLength: 10,
          fontFamily: 'Roboto-Regular',
          selectionColor: 'rgba(0, 147, 121, 0.3)',
          cursorColor: 'white',
          fontSize: 13,
          lineHeight: 24,
          backgroundColor: COLORS.backgroundColor,
          paddingTop: 2.9,
        }}
        flagButtonStyle={{
          marginLeft: 1,
          width: 60,
          paddingLeft: 17,
          paddingTop: 3.3,
        }}
        renderDropdownImage={
          <MaterialIcons
            name="keyboard-arrow-down"
            size={20}
            color={'rgba(102, 102, 102, 1)'}
            style={{marginLeft: -12, marginTop: -5}}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontFamily: 'Roboto-Regular',
    width: 250,
  },
});
