"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const tools_1 = require("./tools");
const { t } = block_basekit_server_api_1.field;
// 通过addDomainList添加请求接口的域名
block_basekit_server_api_1.basekit.addDomainList(['api.exchangerate-api.com']);
block_basekit_server_api_1.basekit.addField({
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
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.DateTime],
            },
            validator: {
                required: true,
            }
        },
    ],
    // 定义捷径的返回结果类型
    resultType: {
        type: block_basekit_server_api_1.FieldType.Object,
        extra: {
            icon: {
                light: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/eqgeh7upeubqnulog/chatbot.svg',
            },
            properties: [
                {
                    key: 'id',
                    isGroupByKey: true,
                    type: block_basekit_server_api_1.FieldType.Text,
                    title: 'id',
                    hidden: true,
                },
                {
                    key: 'sign',
                    type: block_basekit_server_api_1.FieldType.Text,
                    title: t('sign'),
                    primary: true,
                },
            ],
        },
    },
    // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
    execute: async (formItemParams, context) => {
        const { birthday = null } = formItemParams;
        try {
            const sign = (0, tools_1.genZodiacSign)(birthday, 'zh');
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: {
                    id: `${Math.random()}`,
                    // 貌似这里不支持多语言
                    // sign: t(sign)
                    sign: birthday ? sign : ''
                }
            };
        }
        catch (e) {
            return {
                code: block_basekit_server_api_1.FieldCode.Error,
            };
        }
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBZ0o7QUFDaEosbUNBQXdDO0FBRXhDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxnQ0FBSyxDQUFDO0FBRXBCLDJCQUEyQjtBQUMzQixrQ0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztBQUVwRCxrQ0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNmLGdCQUFnQjtJQUNoQixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxLQUFLO2dCQUNmLEtBQUssRUFBRSxLQUFLO2dCQUNaLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixhQUFhLEVBQUUsS0FBSztnQkFDcEIsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsTUFBTSxFQUFFLGFBQWE7Z0JBQ3JCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsS0FBSztnQkFDWixPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixhQUFhLEVBQUUsYUFBYTtnQkFDNUIsV0FBVyxF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