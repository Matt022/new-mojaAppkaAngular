import { UserMale } from "./UserMale";

export class ListOfMaleUsers {
    static maleUserList: UserMale[] = [
        {
            id: 1,
            meno: "Janko",
            priezvisko: "Hrasko",
            vek: 21,

            preferences: {
                hairColor: ["black", " blond"],
                preferredApproximateheightInCm: 175,
                preferredApproximateFigureType: "sporty",
            },

            gender: "male",
            hairColor: "brown",
            hairType: "short curly",
            eyeColor: "blue",
            heightInCm: 185,
            figure: "sporty",

            email: "janko.hrasko@gmail.com",
            prihlasovacieMeno: "JankoHrasko",
            heslo: "jasomjankohrasko999",
            image: "../../../assets/images/muz1.jpg",

            autorizacneCisloPoPrihlaseni: 123456,
            zaloznyMail: "janko.hrasko01@gmail.com",
            telephoneNumber: 421949948331,
            status: "online",
            summaryInfo: "Biscuit apple pie dragée dessert fruitcake sweet. Croissant halvah powder cupcake soufflé. Cheesecake ice cream topping pudding chocolate cake cake danish dragée."
        },
        {
            id: 2,
            meno: "Petko",
            priezvisko: "Mrkvicka",
            vek: 27,

            preferences: {
                hairColor: ["blond"],
                preferredApproximateheightInCm: 170,
                preferredApproximateFigureType: "sporty",
            },

            hairColor: "blond",
            hairType: "short",
            eyeColor: "brown",
            heightInCm: 189,
            figure: "sporty",

            gender: "male",
            email: "petko.mrkvicka@gmail.com",
            prihlasovacieMeno: "PetkoMrkvica",
            heslo: "neskutocnyTypekPetko",
            autorizacneCisloPoPrihlaseni: 654321,
            zaloznyMail: "petko.mrkvicka01@gmail.com",
            telephoneNumber: 421909395487,
            image: "../../../assets/images/muz2.jpg",
            status: "offline",
            summaryInfo: "Sweet roll soufflé biscuit halvah candy candy. Sugar plum cotton candy pudding icing carrot cake bonbon. Pie chupa chups bonbon wafer lollipop topping."
        },
        {
            id: 3,
            meno: "Jozko",
            priezvisko: "Nepoznany",
            vek: 37,

            preferences: {
                hairColor: ["brunette"],
                preferredApproximateheightInCm: 170,
                preferredApproximateFigureType: "sporty",
            },

            gender: "male",
            email: "jozko.nepoznany@gmail.com",
            prihlasovacieMeno: "JozkoNepoznany",
            heslo: "JoZkOjEsEfInKo",
            autorizacneCisloPoPrihlaseni: 857247,
            zaloznyMail: "jozko.nepoznany01@gmail.com",
            telephoneNumber: 421904427447,
            status: "online",
            image: "../../../assets/images/muz3.jpg",

            hairColor: "black",
            hairType: "long",
            eyeColor: "brown",
            heightInCm: 200,
            figure: "hourglass",
            summaryInfo: "Icing cookie soufflé chocolate soufflé chocolate bar topping. Marshmallow danish liquorice pie biscuit oat cake. Lemon drops fruitcake gingerbread donut muffin oat cake donut icing."
        },
        {
            id: 4,
            meno: "Dusan",
            priezvisko: "Betovven",
            vek: 53,

            preferences: {
                hairColor: ["blond"],
                preferredApproximateheightInCm: 170,
                preferredApproximateFigureType: "athletic",
            },

            gender: "male",
            email: "dusan.betovven@gmail.com",
            prihlasovacieMeno: "DusanBetovven",
            heslo: "dusan007",
            autorizacneCisloPoPrihlaseni: 728595,
            zaloznyMail: "dusan.betovven01@gmail.com",
            telephoneNumber: 421949190772,
            status: "online",
            image: "../../../assets/images/muz4.jpg",

            hairColor: "white",
            hairType: "short",
            eyeColor: "blue",
            heightInCm: 175,
            figure: "athletic",
            summaryInfo: "Lollipop liquorice lollipop candy canes tootsie roll pudding lemon drops tart sweet roll. Gingerbread halvah powder candy dessert soufflé chocolate cake icing. Jelly beans jelly beans jelly-o croissant shortbread sweet. "
        },
        {
            id: 5,
            meno: "Dodo",
            priezvisko: "Dodový",
            vek: 48,

            preferences: {
                hairColor: ["ginger"],
                preferredApproximateheightInCm: 180,
                preferredApproximateFigureType: "athletic",
            },

            gender: "male",
            email: "dodo.dodovy@gmail.com",
            prihlasovacieMeno: "DodoDodový",
            heslo: "dodinko9",
            autorizacneCisloPoPrihlaseni: 728595,
            zaloznyMail: "dusan.betovven01@gmail.com",
            telephoneNumber: 421904077081,
            status: "offline",
            image: "../../../assets/images/muz5.jpg",

            hairColor: "white",
            hairType: "short",
            eyeColor: "blue",
            heightInCm: 175,
            figure: "athletic",
            summaryInfo: "Gingerbread liquorice croissant topping dragée halvah powder brownie ice cream. Tart cheesecake caramels brownie soufflé chupa chups icing. Wafer topping gummi bears powder pastry donut donut gingerbread."
        }
    ];
}