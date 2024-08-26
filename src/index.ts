import { basekit, FieldType, field, FieldComponent, FieldCode, NumberFormatter, AuthorizationType } from '@lark-opdev/block-basekit-server-api';
import { genZodiacSign } from './tools';

const { t } = field;

// 通过addDomainList添加请求接口的域名
basekit.addDomainList(['api.exchangerate-api.com']);

basekit.addField({
  // 定义捷径的i18n语言资源
  i18n: {
    messages: {
      "zh-CN": {
        "birthday": "生日",
        "sign": "星座",
        "aries": "白羊座",
        "taurus": "金牛座",
        "gemini": "双子座",
        "cancer": "巨蟹座",
        "leo": "狮子座",
        "virgo": "处女座",
        "libra": "天秤座",
        "scorpio": "天蝎座",
        "sagittarius": "射手座",
        "capricorn": "摩羯座",
        "aquarius": "水瓶座",
        "pisces": "双鱼座"
      },
      "en-US": {
        "birthday": "Birthday",
        "sign": "Zodiac Sign",
        "aries": "Aries",
        "taurus": "Taurus",
        "gemini": "Gemini",
        "cancer": "Cancer",
        "leo": "Leo",
        "virgo": "Virgo",
        "libra": "Libra",
        "scorpio": "Scorpio",
        "sagittarius": "Sagittarius",
        "capricorn": "Capricorn",
        "aquarius": "Aquarius",
        "pisces": "Pisces"
      },
      "ja-JP": {
        "birthday": "誕生日フィールド",
        "sign": "星座",
        "aries": "おひつじ座",
        "taurus": "おうし座",
        "gemini": "ふたご座",
        "cancer": "かに座",
        "leo": "しし座",
        "virgo": "おとめ座",
        "libra": "てんびん座",
        "scorpio": "さそり座",
        "sagittarius": "いて座",
        "capricorn": "やぎ座",
        "aquarius": "みずがめ座",
        "pisces": "うお座"
      }
    }
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'birthday',
      label: t('birthday'),
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.DateTime],
      },
      validator: {
        required: true,
      }
    },
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: FieldType.Object,
    extra: {
      icon: {
        light: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/eqgeh7upeubqnulog/chatbot.svg',
      },
      properties: [
        {
          key: 'id',
          isGroupByKey: true,
          type: FieldType.Text,
          title: 'id',
          hidden: true,
        },
        {
          key: 'sign',
          type: FieldType.Text,
          title: t('sign'),
          primary: true,
        },
      ],
    },
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (formItemParams: { birthday: number }, context) => {
    const { birthday = null } = formItemParams;
    try {
      
      const sign = genZodiacSign(birthday, 'zh')

      return {
        code: FieldCode.Success,
        data: {
          id: `${Math.random()}`,
          // 貌似这里不支持多语言
          // sign: t(sign)
          sign: birthday ? sign : ''
        }
      }
    } catch (e) {
      return {
        code: FieldCode.Error,
      }
    }
  },
});
export default basekit;