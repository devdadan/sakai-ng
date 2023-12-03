interface masalah{
    label: string;
    value: string;
}
export interface Item{
    id?: number;
    masalah?:masalah;
    solusi?:string;
    selectedMasalah?: string;
}