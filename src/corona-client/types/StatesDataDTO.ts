export interface StatesDataDTO {
    fips: string;
    country: Country;
    state: string;
    county: null;
    level: Level;
    lat: null;
    locationId: string;
    long: null;
    population: number;
    metrics: Metrics;
    riskLevels: RiskLevels;
    cdcTransmissionLevel: number;
    actuals: Actuals;
    annotations: { [key: string]: Annotation | null };
    lastUpdatedDate: Date;
    url: string;
}

interface Actuals {
    cases: number;
    deaths: number;
    positiveTests: number;
    negativeTests: number;
    contactTracers: number;
    hospitalBeds: Beds;
    icuBeds: Beds;
    newCases: number;
    newDeaths: number;
    vaccinesDistributed: number;
    vaccinationsInitiated: number;
    vaccinationsCompleted: number;
    vaccinesAdministered: number;
    vaccinesAdministeredDemographics: VaccinesAdministeredDemographics | null;
    vaccinationsInitiatedDemographics: VaccinationsInitiatedDemographics | null;
}

interface Beds {
    capacity: number | null;
    currentUsageTotal: number | null;
    currentUsageCovid: number | null;
}

interface VaccinationsInitiatedDemographics {
    age: { [key: string]: number };
    race: VaccinationsInitiatedDemographicsRace;
    ethnicity: Ethnicity;
    sex: Sex;
}

interface Ethnicity {
    hispanic: number;
    "non-hispanic": number;
    unknown: number;
}

interface VaccinationsInitiatedDemographicsRace {
    ai_an?: number;
    asian?: number;
    asian_or_pacific_islander?: number;
    black: number;
    other?: number;
    unknown: number;
    white: number;
    pacific_islander?: number;
    multiple_other?: number;
    native_american?: number;
}

interface Sex {
    female: number;
    male: number;
    unknown: number;
    other?: number;
}

interface VaccinesAdministeredDemographics {
    age: { [key: string]: number };
    race: VaccinesAdministeredDemographicsRace;
    ethnicity: Ethnicity;
    sex: Sex;
}

interface VaccinesAdministeredDemographicsRace {
    ai_an: number;
    asian: number;
    black: number;
    multiple: number;
    other: number;
    pacific_islander: number;
    unknown: number;
    white: number;
}

interface Annotation {
    sources: SourceElement[];
    anomalies: Anomaly[];
}

interface Anomaly {
    date: Date;
    type: Type;
    original_observation: number;
}

enum Type {
    CumulativeTailTruncated = "cumulative_tail_truncated",
    ZscoreOutlier = "zscore_outlier",
}

interface SourceElement {
    type: SourceEnum;
    url: null | string;
    name: Name | null;
}

enum Name {
    CentersForDiseaseControlAndPrevention = "Centers for Disease Control and Prevention",
    DepartmentOfHealthAndHumanServices = "Department of Health and Human Services",
    TheNewYorkTimes = "The New York Times",
}

enum SourceEnum {
    HHSTesting = "HHSTesting",
    NYTimes = "NYTimes",
    Other = "other",
    TestAndTrace = "TestAndTrace",
}

enum Country {
    Us = "US",
}

enum Level {
    State = "state",
}

interface Metrics {
    testPositivityRatio: number | null;
    testPositivityRatioDetails: TestPositivityRatioDetails;
    caseDensity: number;
    contactTracerCapacityRatio: number | null;
    infectionRate: number | null;
    infectionRateCI90: number | null;
    icuCapacityRatio: number | null;
    vaccinationsInitiatedRatio: number;
    vaccinationsCompletedRatio: number;
}

interface TestPositivityRatioDetails {
    source: SourceEnum;
}

interface RiskLevels {
    overall: number;
    testPositivityRatio: number;
    caseDensity: number;
    contactTracerCapacityRatio: number;
    infectionRate: number;
    icuCapacityRatio: number;
}
