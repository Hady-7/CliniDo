import { DrCity } from './../models/DrCity.model';
import { Injectable } from '@angular/core';
import { DrArea } from '../models/DrArea.model';

@Injectable({
    providedIn: 'root'
})
export class AreaCatService {
    Alexandria: DrArea[] = [
        { id: 1, name: 'Borg El-Arab' },
        { id: 2, name: 'Semoha' },
        { id: 3, name: 'Elramel Station' },
        { id: 4, name: 'El-Betash' },
        { id: 5, name: 'Sedy Gaber' },
        { id: 6, name: 'Sedy Beshr' },

    ]

    Cairo: DrArea[] = [
        { id: 1, name: 'Naser City' },
        { id: 2, name: '6-october' },
        { id: 3, name: 'New Cairo' },
        { id: 4, name: 'El-shrouk' },
        { id: 5, name: 'El nozha' },
        { id: 6, name: ' Madenaty' },
        { id: 7, name: 'El- Rehab' },
        { id: 8, name: 'El-Mostabal' },
    ]
    Assuit: DrArea[] = [
        { id: 1, name: 'Dayrot' },
        { id: 2, name: 'Qusiya' },
        { id: 3, name: 'MAnfalot' },
        { id: 4, name: 'Abnob' },
        { id: 5, name: 'El Badary' },
        { id: 6, name: 'Sahel Slem' },

    ]

    BeniSuef: DrArea[] = [
        { id: 1, name: 'Naser' },
        { id: 2, name: 'Ehnasya' },
        { id: 3, name: 'Smesta' },
        { id: 4, name: 'Beni Suef' },
        { id: 5, name: 'Bba' },
        { id: 6, name: 'El wasta' },
        { id: 7, name: 'El fashn' },
    ]

    Damietta: DrArea[] = [
        { id: 1, name: 'Kafer said' },
        { id: 2, name: 'Farscore' },
        { id: 3, name: 'Kafer El batekh' },
        { id: 4, name: 'El tharka' },
        { id: 5, name: 'Damietta' },
    ]

    ElBeheira: DrArea[] = [
        { id: 1, name: 'Damnhor' },
        { id: 2, name: 'Kafer EL dawar' },
        { id: 3, name: 'Rashed city' },
        { id: 4, name: 'Edco' },
        { id: 5, name: 'Abo EL matamer' },
        { id: 6, name: 'Abo Homous' },
        { id: 7, name: 'Wady El natroon' },
        { id: 8, name: 'Shobrkhet' },

    ]


    ElDakahlia: DrArea[] = [
        { id: 1, name: 'El-Manswria' },
        { id: 2, name: 'Talkha' },
        { id: 3, name: 'metghmer' },
        { id: 4, name: 'Agia' },
        { id: 5, name: 'Bany abeed' },
        { id: 6, name: 'El Manzala' },
        { id: 7, name: 'Dakornous' },
        { id: 8, name: 'El Gamalya' },

    ]


    ElIsmailia: DrArea[] = [
        { id: 1, name: 'Fayed City' },
        { id: 2, name: 'Cairo' },
        { id: 3, name: 'El Cantra shark' },
        { id: 4, name: 'El Cantra gharb' },
        { id: 5, name: 'Abo El saraser' },
        { id: 6, name: 'El Tael el kbber' },
        { id: 7, name: 'El kasaseen' },

    ]



    Minia: DrArea[] = [
        { id: 1, name: 'Maghagha' },
        { id: 2, name: 'Bany Mazar' },
        { id: 3, name: 'Malwy' },
        { id: 4, name: 'Samalot' },
        { id: 5, name: 'Dear mwas' },
        { id: 6, name: 'El Adwa' },
        { id: 7, name: 'El fkrya' },
    ]


    ElSharqia: DrArea[] = [
        { id: 1, name: 'Zakazek' },
        { id: 2, name: 'Belbes' },
        { id: 3, name: 'Hehaa' },
        { id: 4, name: 'Abo hmad' },
        { id: 5, name: 'Fakous' },
        { id: 6, name: 'Abo Kbeer' },
        { id: 7, name: 'El hosainya' },
        { id: 8, name: 'Saker' },

    ]
    Fayoum: DrArea[] = [
        { id: 1, name: 'Tamya' },
        { id: 2, name: 'Snores' },
        { id: 3, name: 'Etsaa' },
        { id: 4, name: 'Abshway' },
        { id: 5, name: 'Yousef el sedyak' },

    ]
    Gharbia: DrArea[] = [
        { id: 1, name: 'Tanta' },
        { id: 2, name: 'Zefta' },
        { id: 3, name: 'El Mahala el kobra' },
        { id: 4, name: 'Kator' },
        { id: 5, name: 'Samanode' },
        { id: 6, name: 'Basyon' },
        { id: 7, name: 'El Zayat' },
        { id: 8, name: 'El santa' },

    ]
    Giza: DrArea[] = [
        { id: 1, name: 'Badrashin City' },
        { id: 2, name: 'El-Saf City' },
        { id: 3, name: 'Atfeih' },
        { id: 4, name: 'El-ayat' },
        { id: 5, name: 'Osem' },
        { id: 6, name: 'Kerdasa' },

    ]


    Hurghada: DrArea[] = [
        { id: 1, name: 'Sowma by' },
        { id: 2, name: 'Makady by' },
        { id: 3, name: 'El fander' },
        { id: 4, name: 'Abo Ramad' },
        { id: 5, name: 'Karlos' },
        { id: 6, name: 'Magawesh' },
    ]


    PortSaid: DrArea[] = [
        { id: 1, name: 'por fouad' },
        { id: 2, name: 'EL shrouk ' },
        { id: 3, name: 'El mankh' },
        { id: 4, name: 'El dawhy' },
        { id: 5, name: 'EL Arab' },
        { id: 6, name: 'El zhoure' },
    ]

    NorthCoast: DrArea[] = [
        { id: 1, name: 'Marina' },
        { id: 2, name: 'Kelo Batra' },
        { id: 3, name: 'Ageba' },
    ]


    Menoufia: DrArea[] = [
        { id: 1, name: 'El-sadat' },
        { id: 2, name: 'shben El-kom' },
        { id: 3, name: 'Mnof' },
        { id: 4, name: 'Ashmon' },
        { id: 5, name: 'Tala' },
        { id: 6, name: 'El shohdaa' },
        { id: 7, name: 'Gowsna' },
        { id: 8, name: 'El Bagor' },

    ]


    Matrouh: DrArea[] = [
        { id: 1, name: 'Seewaa' },
        { id: 2, name: 'El Saloom' },
        { id: 3, name: 'Cedy Brany' },
        { id: 4, name: 'El Nagela' },
        { id: 5, name: 'El Dabaa' },
        { id: 6, name: 'El Alamen' },
        { id: 7, name: 'El Hmam' },


    ]


    Luxor: DrArea[] = [
        { id: 1, name: 'Armaint' },
        { id: 2, name: 'Asnia' },
        { id: 3, name: 'EEl-Karna' },
        { id: 4, name: 'El bayad' },
        { id: 5, name: 'El todi' },
        { id: 6, name: 'El zayna' },

    ]

    KafrElSheikh: DrArea[] = [
        { id: 1, name: 'Desook' },
        { id: 2, name: 'Baltem' },
        { id: 3, name: 'Bela' },
        { id: 4, name: 'El Reyaid' },
        { id: 5, name: 'Klean' },
        { id: 6, name: 'El hamol' },

    ]



    SharmElSheikh: DrArea[] = [
        { id: 1, name: 'Taba' },
        { id: 2, name: 'Dahab' },
        { id: 3, name: 'Ras seder' },
        { id: 4, name: 'Nweba' },
        { id: 5, name: 'Sant Katreen' },
        { id: 6, name: 'Abo rades' },
        { id: 7, name: 'Abo Zanyma' },
    ]


    Suez: DrArea[] = [
        { id: 1, name: 'Ataka' },
        { id: 2, name: 'El Arbaen' },
        { id: 3, name: 'El Ganayen' },


    ]

    Sohag: DrArea[] = [
        { id: 1, name: 'Akhmem' },
        { id: 2, name: 'El balyana' },
        { id: 3, name: 'El-Mragha' },
        { id: 4, name: 'Gerga' },
        { id: 5, name: 'Tema' },
        { id: 6, name: 'El Monshaa' },
        { id: 7, name: 'Saklta' },
        { id: 8, name: 'Tahta' },

    ]

    Qena: DrArea[] = [
        { id: 1, name: 'Abo tesht' },
        { id: 2, name: 'Nada Hamady' },
        { id: 3, name: 'Deshna' },
        { id: 4, name: 'Elrfaf' },
        { id: 5, name: 'Nkada' },
        { id: 6, name: 'Kosa' },
        { id: 7, name: 'El waf' },


    ]



    AllAreas(){
      return [...this.Alexandria,...this.Assuit,...this.BeniSuef,...this.Cairo,...this.Damietta,...this.ElBeheira,...this.ElDakahlia,...this.ElIsmailia,...this.ElSharqia,...this.Fayoum,...this.Gharbia,...this.Giza,...this.Hurghada,...this.KafrElSheikh,...this.Luxor,...this.Matrouh,...this.Menoufia,...this.Minia,...this.NorthCoast,...this.PortSaid,...this.Qena,...this.SharmElSheikh,...this.Sohag,...this.Suez];
    }
    // AllDoctorCity() {
    //     return [...this.Qena];
    // }

}
