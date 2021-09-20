export class Vehicule{

  public id: string;
  public nom: string;
  public marque: string;
  public model: string;
  public annee: number;
  public cylindree: number;
  public fiscal: number;
  public din: number;
  public transmission: string;
  public carburant: string;
  public motrice: string;
  public immatriculation: string;

  constructor(id?: string, nom?: string, marque?: string, model?: string, annee?: number, cylindree?: number, fiscal?: number, din?: number,
              transmission?: string, carburant?: string, motrice?: string, immatriculation?: string) {
    this.id = id;
    this.nom = nom;
    this.marque = marque;
    this.model = model;
    this.annee = annee;
    this.cylindree = cylindree;
    this.fiscal = fiscal;
    this.din = din;
    this.transmission = transmission;
    this.carburant = carburant;
    this.motrice = motrice;
    this.immatriculation = immatriculation;
  }

}
