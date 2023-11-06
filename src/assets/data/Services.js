import i18n from "../../i18n";
export const servicesData = [
    {
        tabName: i18n.t("offices"),
        index: 1,
        services: [
            {
                title: i18n.t("liaison_office"),
                url: "https://career.ihu.gr/",
                imgUrl:
                    "https://career.ihu.gr/wp-content/uploads/2022/04/DI.PA_.E._logo.png",
            },
            {
                title: i18n.t("internship_office"),
                url: "https://praktiki.teithe.gr/", //TODO: ADD OTHER LOCATIONS' INTERNSHIP OFFICES

                imgUrl:
                    "https://praktiki.teithe.gr/wp-content/uploads/2019/12/p_askissis_dipae_logo.jpg",
            },
            {
                title: i18n.t("erasmus_office"),
                url: "https://www.ihu.gr/monades/intprogrs#erasmus+",
                imgUrl:
                    "https://www.ihu.gr/wp-content/uploads/2019/05/ihu-gr-logo-created17m519.png",
            },
            {
                title: i18n.t("qa_office"),
                url: "https://www.ihu.gr/modip/",

                imgUrl:
                    "https://www.ihu.gr/modip/wp-content/uploads/sites/5/2020/12/modip100v2-1.png",
            },
        ],
    },
    {
        tabName: i18n.t("student_clubs"),
        index: 2,
        services: [
            {
                title: i18n.t("autoros_student_club"),
                url: "https://autoros.iem.ihu.gr",
                imgUrl: "https://bandisast.eu/files/images/autoros.svg",
            }
        ],
    },
    {
        tabName: i18n.t("other_services"),
        index: 3,
        services: [
            {
                title: i18n.t("ethics_research_committee"),
                url: "https://rc.ihu.gr/",
                imgUrl: "https://i0.wp.com/rc.ihu.gr/wp-content/uploads/2020/09/cropped-Logo.png",
            },
            {
                title: i18n.t("student_advocate"),
                url: "https://www.ihu.gr/synigoros-foititi",
                imgUrl:
                    "https://foititisonline.gr/wp-content/uploads/2018/08/sinigoros-tou-foititi-3.jpg",
            },
            {
                title: i18n.t("gender_eq_committee"),
                url: "https://www.ihu.gr/syllogoi-epitropes/eif",
                imgUrl:
                    "https://www.ihu.gr/wp-content/uploads/2019/05/ihu-gr-logo-created17m519.png",
            },
            {
                title: i18n.t("student_consulting_support_center"),
                url: "https://www.ihu.gr/foititiki-merimna",
                imgUrl: "https://www.ihu.gr/wp-content/uploads/2019/05/ihu-gr-logo-created17m519.png",
            },
            {
                title: i18n.t("uni_publications"), //TODO
                url: "http://eureka.teithe.gr/jspui/?locale=el",
                imgUrl: "http://eureka.teithe.gr/jspui/static/custom/img/eureka.png",
            },
        ],
    },
];