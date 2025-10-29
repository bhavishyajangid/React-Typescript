
type LangType = 'en' | 'fr' | 'de' | 'es';


type wordType = {
    word : string,
    meaning : string,
    option : string[]
}

interface stateType {
    loading : boolean,
    error? : string,
    words : wordType[],
    result : string[]
}