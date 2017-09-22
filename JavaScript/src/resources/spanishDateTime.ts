// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

import { BaseDateTime } from "./baseDateTime";
export namespace SpanishDateTime {
	export const TillRegex = `(?<till>hasta|al|a|--|-|—|——)(\\s+(el|la(s)?))?`;
	export const AndRegex = `(?<and>y|y\\s*el|--|-|—|——)`;
	export const DayRegex = `(?<day>01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|1|20|21|22|23|24|25|26|27|28|29|2|30|31|3|4|5|6|7|8|9)(?=\\b|t)`;
	export const MonthNumRegex = `(?<month>01|02|03|04|05|06|07|08|09|10|11|12|1|2|3|4|5|6|7|8|9)\\b`;
	export const YearRegex = `(?<year>19\\d{2}|20\\d{2}|9\\d|0\\d|1\\d|2\\d)`;
	export const FullYearRegex = `\\b(?<year>19\\d{2}|20\\d{2})\\b`;
	export const RelativeMonthRegex = `(?<relmonth>(este|pr[oó]ximo|[uú]ltimo)\\s+mes)\\b`;
	export const MonthRegex = `(?<month>Abril|Abr|Agosto|Ago|Diciembre|Dic|Febrero|Feb|Enero|Ene|Julio|Jul|Junio|Jun|Marzo|Mar|Mayo|May|Noviembre|Nov|Octubre|Oct|Septiembre|Setiembre|Sept|Set)`;
	export const MonthSuffixRegex = `(?<msuf>(en\\s+|del\\s+|de\\s+)?(${RelativeMonthRegex}|${MonthRegex}))`;
	export const DateUnitRegex = `(?<unit>años|año|meses|mes|semanas|semana|d[ií]a(s)?)\\b`;
	export const PastRegex = `(?<past>\\b(pasad(a|o)(s)?|[uú]ltim[oa](s)?|anterior(es)?|previo(s)?)\\b)`;
	export const FutureRegex = `(?<past>\\b(siguiente(s)?|pr[oó]xim[oa](s)?|dentro\\s+de|en)\\b)`;
	export const SimpleCasesRegex = `\\b((desde\\s+el|desde|del)\\s+)?(${DayRegex})\\s*${TillRegex}\\s*(${DayRegex})\\s+${MonthSuffixRegex}((\\s+|\\s*,\\s*)${FullYearRegex})?\\b`;
	export const MonthFrontSimpleCasesRegex = `\\b${MonthSuffixRegex}\\s+((desde\\s+el|desde|del)\\s+)?(${DayRegex})\\s*${TillRegex}\\s*(${DayRegex})((\\s+|\\s*,\\s*)${FullYearRegex})?\\b`;
	export const MonthFrontBetweenRegex = `\\b${MonthSuffixRegex}\\s+((entre|entre\\s+el)\\s+)(${DayRegex})\\s*${AndRegex}\\s*(${DayRegex})((\\s+|\\s*,\\s*)${FullYearRegex})?\\b`;
	export const DayBetweenRegex = `\\b((entre|entre\\s+el)\\s+)(${DayRegex})\\s*${AndRegex}\\s*(${DayRegex})\\s+${MonthSuffixRegex}((\\s+|\\s*,\\s*)${FullYearRegex})?\\b`;
	export const OneWordPeriodRegex = `\\b(((pr[oó]xim[oa]?|est[ea]|[uú]ltim[oa]?|en)\\s+)?(?<month>Abril|Abr|Agosto|Ago|Diciembre|Dic|Enero|Ene|Febrero|Feb|Julio|Jul|Junio|Jun|Marzo|Mar|Mayo|May|Noviembre|Nov|Octubre|Oct|Septiembre|Setiembre|Sept|Set)|(?<=\\b(del|de la|el|la)\\s+)?(pr[oó]xim[oa](s)?|[uú]ltim[oa]?|est(e|a))\\s+(fin de semana|semana|mes|año)|fin de semana|(mes|años)? a la fecha)\\b`;
	export const MonthWithYearRegex = `\\b(((pr[oó]xim[oa](s)?|este|esta|[uú]ltim[oa]?|en)\\s+)?(?<month>Abril|Abr|Agosto|Ago|Diciembre|Dic|Enero|Ene|Febrero|Feb|Julio|Jul|Junio|Jun|Marzo|Mar|Mayo|May|Noviembre|Nov|Octubre|Oct|Septiembre|Setiembre|Sept|Set)\\s+((de|del|de la)\\s+)?(${FullYearRegex}|(?<order>pr[oó]ximo(s)?|[uú]ltimo?|este)\\s+año))\\b`;
	export const MonthNumWithYearRegex = `(${FullYearRegex}[/\\-\\.]${MonthNumRegex})|(${MonthNumRegex}[/\\-]${FullYearRegex})`;
	export const WeekOfMonthRegex = `(?<wom>(la\\s+)?(?<cardinal>primera?|1ra|segunda|2da|tercera?|3ra|cuarta|4ta|quinta|5ta|[uú]ltima)\\s+semana\\s+${MonthSuffixRegex})`;
	export const WeekOfYearRegex = `(?<woy>(la\\s+)?(?<cardinal>primera?|1ra|segunda|2da|tercera?|3ra|cuarta|4ta|quinta|5ta|[uú]ltima?)\\s+semana(\\s+del?)?\\s+(${FullYearRegex}|(?<order>pr[oó]ximo|[uú]ltimo|este)\\s+año))`;
	export const FollowedDateUnit = `^\\s*${DateUnitRegex}`;
	export const NumberCombinedWithDateUnit = `\\b(?<num>\\d+(\\.\\d*)?)${DateUnitRegex}`;
	export const QuarterRegex = `(el\\s+)?(?<cardinal>primer|1er|segundo|2do|tercer|3ro|cuarto|4to)\\s+cuatrimestre(\\s+de|\\s*,\\s*)?\\s+(${FullYearRegex}|(?<order>pr[oó]ximo(s)?|[uú]ltimo?|este)\\s+año)`;
	export const QuarterRegexYearFront = `(${FullYearRegex}|(?<order>pr[oó]ximo(s)?|[uú]ltimo?|este)\\s+año)\\s+(el\\s+)?(?<cardinal>(primer|primero)|1er|segundo|2do|(tercer|terceo)|3ro|cuarto|4to)\\s+cuatrimestre`;
	export const SeasonRegex = `\\b(?<season>(([uú]ltim[oa]|est[ea]|el|la|(pr[oó]xim[oa]s?|siguiente))\\s+)?(?<seas>primavera|verano|otoño|invierno)((\\s+del?|\\s*,\\s*)?\\s+(${FullYearRegex}|(?<order>pr[oó]ximo|[uú]ltimo|este)\\s+año))?)\\b`;
	export const WhichWeekRegex = `(semana)(\\s*)(?<number>\\d\\d|\\d|0\\d)`;
	export const WeekOfRegex = `(semana)(\\s*)((do|da|de))`;
	export const MonthOfRegex = `(mes)(\\s*)((do|da|de))`;
	export const RangeUnitRegex = `\\b(?<unit>años|año|meses|mes|semanas|semana)\\b`;
	export const InConnectorRegex = `\\b(in)\\b`;
	export const FromRegex = `((desde|de)(\\s*la(s)?)?)$`;
	export const ConnectorAndRegex = `(y\\s*(la(s)?)?)$`;
	export const BetweenRegex = `(entre\\s*(la(s)?)?)`;
	export const WeekDayRegex = `\\b(?<weekday>Domingos?|Lunes|Martes|Mi[eé]rcoles|Jueves|Viernes|S[aá]bados?|Lu|Ma|Mi|Ju|Vi|Sa|Do)\\b`;
	export const OnRegex = `(?<=\\ben\\s+)(${DayRegex}s?)\\b`;
	export const RelaxedOnRegex = `(?<=\\b(en|el|del)\\s+)((?<day>10|11|12|13|14|15|16|17|18|19|1st|20|21|22|23|24|25|26|27|28|29|2|30|31|3|4|5|6|7|8|9)s?)\\b`;
	export const ThisRegex = `\\b((este\\s*)${WeekDayRegex})|(${WeekDayRegex}\\s*((de\\s+)?esta\\s+semana))\\b`;
	export const LastDateRegex = `\\b(([uú]ltimo)\\s*${WeekDayRegex})|(${WeekDayRegex}(\\s+((de\\s+)?(esta|la)\\s+([uú]ltima\\s+)?semana)))\\b`;
	export const NextDateRegex = `\\b(((pr[oó]ximo|siguiente)\\s*)${WeekDayRegex})|(${WeekDayRegex}(\\s+(de\\s+)?(la\\s+)?(pr[oó]xima|siguiente)(\\s*semana)))\\b`;
	export const SpecialDayRegex = `\\b((el\\s+)?(d[ií]a\\s+antes\\s+de\\s+ayer|anteayer)|((el\\s+)?d[ií]a\\s+(despu[eé]s\\s+)?de\\s+mañana|pasado\\s+mañana)|(el\\s)?d[ií]a siguiente|(el\\s)?pr[oó]ximo\\s+d[ií]a|(el\\s+)?[uú]ltimo d[ií]a|(d)?el d[ií]a|ayer|mañana|hoy)\\b`;
	export const WeekDayOfMonthRegex = `(?<wom>(el\\s+)?(?<cardinal>primer|1er|segundo|2do|tercer|3er|cuarto|4to|quinto|5to|[uú]ltimo)\\s+${WeekDayRegex}\\s+${MonthSuffixRegex})`;
	export const SpecialDateRegex = `(?<=\\b(en)\\s+el\\s+)${DayRegex}\\b`;
	export const OfMonthRegex = `^\\s*de\\s*${MonthSuffixRegex}`;
	export const MonthEndRegex = `(${MonthRegex}\\s*(el)?\\s*$)`;
	export const DateExtractor1 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}?((\\s*(de)|[/\\\\\\.\\-])\\s*)?${MonthRegex}\\b`;
	export const DateExtractor2 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}\\s*([\\.\\-]|de)?\\s*${MonthRegex}?(\\s*,\\s*|\\s*(del?)\\s*)${YearRegex}\\b`;
	export const DateExtractor3 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}(\\s+|\\s*,\\s*|\\s+de\\s+|\\s*-\\s*)${MonthRegex}((\\s+|\\s*,\\s*)${YearRegex})?\\b`;
	export const DateExtractor4 = `\\b${MonthNumRegex}\\s*[/\\\\\\-]\\s*${DayRegex}\\s*[/\\\\\\-]\\s*${YearRegex}`;
	export const DateExtractor5 = `\\b${DayRegex}\\s*[/\\\\\\-]\\s*${MonthNumRegex}\\s*[/\\\\\\-]\\s*${YearRegex}`;
	export const DateExtractor6 = `(?<=\\b(en|el)\\s+)${MonthNumRegex}[\\-\\.]${DayRegex}\\b`;
	export const DateExtractor7 = `\\b${MonthNumRegex}\\s*/\\s*${DayRegex}((\\s+|\\s*,\\s*|\\s+de\\s+)${YearRegex})?\\b`;
	export const DateExtractor8 = `(?<=\\b(en|el)\\s+)${DayRegex}[\\\\\\-]${MonthNumRegex}\\b`;
	export const DateExtractor9 = `\\b${DayRegex}\\s*/\\s*${MonthNumRegex}((\\s+|\\s*,\\s*|\\s+de\\s+)${YearRegex})?\\b`;
	export const DateExtractor10 = `\\b${YearRegex}\\s*[/\\\\\\-]\\s*${MonthNumRegex}\\s*[/\\\\\\-]\\s*${DayRegex}`;
	export const HourNumRegex = `\\b(?<hournum>cero|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)\\b`;
	export const DescRegex = `(?<desc>pm\\b|am\\b|p\\.m\\.|a\\.m\\.)`;
	export const AmDescRegex = `(am\\b|a\\.m\\.|a m\\b|a\\. m\\.\\b|a\\.m\\b|a\\. m\\b)`;
	export const PmDescRegex = `(pm\\b|p\\.m\\.|p\\b|p m\\b|p\\. m\\.\\b|p\\.m\\b|p\\. m\\b)`;
	export const AmPmDescRegex = `(ampm)`;
	export const MinuteNumRegex = `(?<minnum>un|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|dieciseis|diecisiete|dieciocho|diecinueve|veinte|treinta|cuarenta|cincuenta)`;
	export const DeltaMinuteNumRegex = `(?<deltaminnum>un|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|dieciseis|diecisiete|dieciocho|diecinueve|veinte|treinta|cuarenta|cincuenta)`;
	export const OclockRegex = `(?<oclock>en\\s+punto)`;
	export const PmRegex = `(?<pm>((por|de|a|en)\\s+la)\\s+(tarde|noche))`;
	export const AmRegex = `(?<am>((por|de|a|en)\\s+la)\\s+(mañana|madrugada))`;
	export const AmTimeRegex = `(?<am>(esta|(por|de|a|en)\\s+la)\\s+(mañana|madrugada))`;
	export const PmTimeRegex = `(?<pm>(esta|(por|de|a|en)\\s+la)\\s+(tarde|noche))`;
	export const LessThanOneHour = `(?<lth>((\\s+y\\s+)?cuarto|(\\s*)menos cuarto|(\\s+y\\s+)media|${BaseDateTime.DeltaMinuteRegex}(\\s+(minuto|minutos|min|mins))|${DeltaMinuteNumRegex}(\\s+(minuto|minutos|min|mins))))`;
	export const TensTimeRegex = `(?<tens>diez|veint(i|e)|treinta|cuarenta|cincuenta)`;
	export const SpaTimeRegex = `(?<engtime>${HourNumRegex}\\s*((y|menos)\\s+)?(${MinuteNumRegex}|(${TensTimeRegex}((\\s*y\\s+)?${MinuteNumRegex})?)))`;
	export const TimePrefix = `(?<prefix>${LessThanOneHour}(\\s+(pasad[ao]s)\\s+(de\\s+las|las)?|\\s+(para|antes\\s+de)?\\s+(las?))?)`;
	export const TimeSuffix = `(?<suffix>(${LessThanOneHour}\\s+)?(${AmRegex}|${PmRegex}|${OclockRegex}))`;
	export const BasicTime = `(?<basictime>${SpaTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex}:${BaseDateTime.MinuteRegex}(:${BaseDateTime.SecondRegex})?|${BaseDateTime.HourRegex})`;
	export const AtRegex = `\\b(?<=\\b(a las?)\\s+)(${SpaTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex})\\b`;
	export const ConnectNumRegex = `(${BaseDateTime.HourRegex}(?<min>00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59)\\s*${DescRegex})`;
	export const TimeRegex1 = `(\\b${TimePrefix}\\s+)?(${SpaTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex})\\s*(${DescRegex})`;
	export const TimeRegex2 = `(\\b${TimePrefix}\\s+)?(T)?${BaseDateTime.HourRegex}(\\s*)?:(\\s*)?${BaseDateTime.MinuteRegex}((\\s*)?:(\\s*)?${BaseDateTime.SecondRegex})?((\\s*${DescRegex})|\\b)`;
	export const TimeRegex3 = `(\\b${TimePrefix}\\s+)?${BaseDateTime.HourRegex}\\.${BaseDateTime.MinuteRegex}(\\s*${DescRegex})`;
	export const TimeRegex4 = `\\b((${DescRegex}?)|(${BasicTime}?)(${DescRegex}?))(${TimePrefix}\\s*)(${HourNumRegex}|${BaseDateTime.HourRegex})?(\\s+${TensTimeRegex}(\\s+y\\s+)?${MinuteNumRegex}?)?(${OclockRegex})?\\b`;
	export const TimeRegex5 = `\\b(${TimePrefix}|${BasicTime}${TimePrefix})\\s+(\\s*${DescRegex})?${BasicTime}?\\s*${TimeSuffix}\\b`;
	export const TimeRegex6 = `(${BasicTime}(\\s*${DescRegex})?\\s+${TimeSuffix}\\b)`;
	export const TimeRegex7 = `\\b${TimeSuffix}\\s+a\\s+las\\s+${BasicTime}((\\s*${DescRegex})|\\b)`;
	export const TimeRegex8 = `\\b${TimeSuffix}\\s+${BasicTime}((\\s*${DescRegex})|\\b)`;
	export const TimeRegex9 = `\\b(?<engtime>${HourNumRegex}\\s+(${TensTimeRegex}\\s*)?(y\\s+)?${MinuteNumRegex}?)\\b`;
	export const TimeRegex10 = `(a\\s+la|al)\\s+(madrugada|mañana|medio\\s*d[ií]a|tarde|noche)`;
	export const TimeRegex11 = `\\b(${SpaTimeRegex})(${DescRegex}?)\\b`;
	export const PrepositionRegex = `(?<prep>(a(l)?|en|de(l)?)?(\\s*(la(s)?|el|los))?$)`;
	export const NowRegex = `\\b(?<now>(justo\\s+)?ahora(\\s+mismo)?|en\\s+este\\s+momento|tan\\s+pronto\\s+como\\s+sea\\s+posible|tan\\s+pronto\\s+como\\s+(pueda|puedas|podamos|puedan)|lo\\s+m[aá]s\\s+pronto\\s+posible|recientemente|previamente)\\b`;
	export const SuffixRegex = `^\\s*(((y|a|en|por)\\s+la|al)\\s+)?(mañana|madrugada|medio\\s*d[ií]a|tarde|noche)\\b`;
	export const TimeOfDayRegex = `\\b(?<timeOfDay>mañana|madrugada|(pasado\\s+(el\\s+)?)?medio\\s?d[ií]a|tarde|noche|anoche)\\b`;
	export const SpecificTimeOfDayRegex = `\\b(((((a)?\\s+la|esta|siguiente|pr[oó]xim[oa]|[uú]ltim[oa])\\s+)?${TimeOfDayRegex}))\\b`;
	export const TimeOfTodayAfterRegex = `^\\s*(,\\s*)?(en|de(l)?\\s+)?${SpecificTimeOfDayRegex}`;
	export const TimeOfTodayBeforeRegex = `(${SpecificTimeOfDayRegex}(\\s*,)?(\\s+(a\\s+la(s)?|para))?\\s*)`;
	export const SimpleTimeOfTodayAfterRegex = `(${HourNumRegex}|${BaseDateTime.HourRegex})\\s*(,\\s*)?((en|de(l)?)?\\s+)?${SpecificTimeOfDayRegex}`;
	export const SimpleTimeOfTodayBeforeRegex = `(${SpecificTimeOfDayRegex}(\\s*,)?(\\s+(a\\s+la|para))?\\s*(${HourNumRegex}|${BaseDateTime.HourRegex}))`;
	export const TheEndOfRegex = `((a|e)l\\s+)?fin(alizar|al)?(\\s+(el|de(l)?)(\\s+d[ií]a)?(\\s+de)?)?\\s*$`;
	export const UnitRegex = `(?<unit>años|año|meses|mes|semanas|semana|d[ií]as|d[ií]a|horas|hora|h|hr|hrs|hs|minutos|minuto|mins|min|segundos|segundo|segs|seg)\\b`;
	export const ConnectorRegex = `^(,|t|para la|para las|cerca de la|cerca de las)$`;
	export const TimeHourNumRegex = `(?<hour>veintiuno|veintidos|veintitres|veinticuatro|cero|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|diecis([eé])is|diecisiete|dieciocho|diecinueve|veinte)`;
	export const PureNumFromTo = `((desde|de)\\s+(la(s)?\\s+)?)?(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<leftDesc>${DescRegex}))?\\s*${TillRegex}\\s*(${BaseDateTime.HourRegex}|${TimeHourNumRegex})\\s*(?<rightDesc>${PmRegex}|${AmRegex}|${DescRegex})?`;
	export const PureNumBetweenAnd = `(entre\\s+(la(s)?\\s+)?)(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<leftDesc>${DescRegex}))?\\s*y\\s*(la(s)?\\s+)?(${BaseDateTime.HourRegex}|${TimeHourNumRegex})\\s*(?<rightDesc>${PmRegex}|${AmRegex}|${DescRegex})?`;
	export const TimeUnitRegex = `(?<unit>horas|hora|h|minutos|minuto|mins|min|segundos|segundo|secs|sec)\\b`;
	export const TimeFollowedUnit = `^\\s*${TimeUnitRegex}`;
	export const TimeNumberCombinedWithUnit = `\\b(?<num>\\d+(\\,\\d*)?)\\s*${TimeUnitRegex}`;
	export const DateTimePeriod_NumberCombinedWithUnit = `\\b(?<num>\\d+(\\.\\d*)?)\\s*${TimeUnitRegex}`;
	export const PeriodTimeOfDayWithDateRegex = `\\b(((y|a|en|por)\\s+la|al)\\s+)?(?<timeOfDay>mañana|madrugada|(pasado\\s+(el\\s+)?)?medio\\s?d[ií]a|tarde|noche|anoche)\\b`;
	export const RelativeTimeUnitRegex = `(${PastRegex}|${FutureRegex})\\s+${UnitRegex}`;
	export const SuffixAndRegex = `(?<suffix>\\s*(y)\\s+((un|uno|una)\\s+)?(?<suffix_num>media|cuarto))`;
	export const FollowedUnit = `^\\s*${UnitRegex}`;
	export const Duration_NumberCombinedWithUnit = `\\b(?<num>\\d+(\\,\\d*)?)${UnitRegex}`;
	export const AnUnitRegex = `\\b(un(a)?)\\s+${UnitRegex}`;
	export const AllRegex = `\\b(?<all>tod[oa]?\\s+(el|la)\\s+(?<unit>año|mes|semana|d[ií]a))\\b`;
	export const HalfRegex = `\\b(?<half>medi[oa]\\s+(?<unit>ano|mes|semana|d[íi]a|hora))\\b`;
	export const InExactNumberRegex = `\\b(pocos|poco|algo|varios)\\b`;
	export const InExactNumberUnitRegex = `\\b(pocos|poco|algo|varios)\\s+${UnitRegex}`;
	export const HolidayRegex1 = `\\b(?<holiday>viernes santo|mi[eé]rcoles de ceniza|martes de carnaval|d[ií]a (de|de los) presidentes?|clebraci[oó]n de mao|año nuevo chino|año nuevo|(festividad de )?los mayos|d[ií]a de los inocentes|navidad|d[ií]a de acci[oó]n de gracias|halloween|noches de brujas)(\\s+(del?\\s+)?(${FullYearRegex}|(?<order>(pr[oó]xim[oa]?|est[ea]|[uú]ltim[oa]?|en))\\s+año))?\\b`;
	export const HolidayRegex2 = `\\b(?<holiday>(d[ií]a( del?( la)?)? )?(martin luther king|todos los santos|blanco|san patricio|san valent[ií]n|san jorge|cinco de mayo|independencia|raza|trabajador))(\\s+(del?\\s+)?(${FullYearRegex}|(?<order>(pr[oó]xim[oa]?|est[ea]|[uú]ltim[oa]?|en))\\s+año))?\\b`;
	export const HolidayRegex3 = `\\b(?<holiday>(d[ií]a( del?( las?)?)? )(trabajador|madres?|padres?|[aá]rbol|mujer(es)?|solteros?|niños?|marmota))(\\s+(del?\\s+)?(${FullYearRegex}|(?<order>(pr[oó]xim[oa]?|est[ea]|[uú]ltim[oa]?|en))\\s+año))?\\b`;
	export const BeforeRegex = `(antes(\\s+de(\\s+las?)?)?)`;
	export const AfterRegex = `(despues(\\s*de(\\s+las?)?)?)`;
	export const PeriodicRegex = `\\b(?<periodic>a\\s*diario|diariamente|mensualmente|semanalmente|quincenalmente|anualmente)\\b`;
	export const EachExpression = `cada|tod[oa]s\\s*(l[oa]s)?`;
	export const EachUnitRegex = `(?<each>(${EachExpression})\\s*${UnitRegex})`;
	export const EachPrefixRegex = `(?<each>(${EachExpression})\\s*$)`;
	export const EachDayRegex = `\\s*(${EachExpression})\\s*d[ií]as\\s*\\b`;
	export const BeforeEachDayRegex = `(${EachExpression})\\s*d[ií]as(\\s+a\\s+las?)?\\s*\\b`;
	export const SetEachRegex = `(?<each>(${EachExpression})\\s*)`;
	export const AgoRegex = `\\b(antes)\\b`;
	export const LaterRegex = `\\b(despu[eé]s|desde ahora)\\b`;
	export const Tomorrow = 'mañana';
	export const UnitMap: ReadonlyMap<string, string> = new Map<string, string>([["años", "Y"],["año", "Y"],["meses", "MON"],["mes", "MON"],["semanas", "W"],["semana", "W"],["dias", "D"],["dia", "D"],["días", "D"],["día", "D"],["horas", "H"],["hora", "H"],["hrs", "H"],["hr", "H"],["h", "H"],["minutos", "M"],["minuto", "M"],["mins", "M"],["min", "M"],["segundos", "S"],["segundo", "S"],["segs", "S"],["seg", "S"]]);
	export const UnitValueMap: ReadonlyMap<string, number> = new Map<string, number>([["años", 31536000],["año", 31536000],["meses", 2592000],["mes", 2592000],["semanas", 604800],["semana", 604800],["dias", 86400],["dia", 86400],["días", 86400],["día", 86400],["horas", 3600],["hora", 3600],["hrs", 3600],["hr", 3600],["h", 3600],["minutos", 60],["minuto", 60],["mins", 60],["min", 60],["segundos", 1],["segundo", 1],["segs", 1],["seg", 1]]);
	export const SeasonMap: ReadonlyMap<string, string> = new Map<string, string>([["primavera", "SP"],["verano", "SU"],["otoño", "FA"],["invierno", "WI"]]);
	export const SeasonValueMap: ReadonlyMap<string, number> = new Map<string, number>([["SP", 3],["SU", 6],["FA", 9],["WI", 12]]);
	export const CardinalMap: ReadonlyMap<string, number> = new Map<string, number>([["primer", 1],["primero", 1],["primera", 1],["1er", 1],["1ro", 1],["1ra", 1],["segundo", 2],["segunda", 2],["2do", 2],["2da", 2],["tercer", 3],["tercero", 3],["tercera", 3],["3er", 3],["3ro", 3],["3ra", 3],["cuarto", 4],["cuarta", 4],["4to", 4],["4ta", 4],["quinto", 5],["quinta", 5],["5to", 5],["5ta", 5]]);
	export const DayOfWeek: ReadonlyMap<string, number> = new Map<string, number>([["lunes", 1],["martes", 2],["miercoles", 3],["miércoles", 3],["jueves", 4],["viernes", 5],["sabado", 6],["domingo", 0],["lu", 1],["ma", 2],["mi", 3],["ju", 4],["vi", 5],["sa", 6],["do", 0]]);
	export const MonthOfYear: ReadonlyMap<string, number> = new Map<string, number>([["1", 1],["2", 2],["3", 3],["4", 4],["5", 5],["6", 6],["7", 7],["8", 8],["9", 9],["10", 10],["11", 11],["12", 12],["enero", 1],["febrero", 2],["marzo", 3],["abril", 4],["mayo", 5],["junio", 6],["julio", 7],["abosto", 8],["septiembre", 9],["setiembre", 9],["octubre", 10],["noviembre", 11],["diciembre", 12],["ene", 1],["feb", 2],["mar", 3],["abr", 4],["may", 5],["jun", 6],["jul", 7],["ago", 8],["sept", 9],["set", 9],["oct", 10],["nov", 11],["dic", 12],["01", 1],["02", 2],["03", 3],["04", 4],["05", 5],["06", 6],["07", 7],["08", 8],["09", 9]]);
	export const Numbers: ReadonlyMap<string, number> = new Map<string, number>([["cero", 0],["un", 1],["una", 1],["uno", 1],["dos", 2],["tres", 3],["cuatro", 4],["cinco", 5],["seis", 6],["siete", 7],["ocho", 8],["nueve", 9],["diez", 10],["once", 11],["doce", 12],["docena", 12],["docenas", 12],["trece", 13],["catorce", 14],["quince", 15],["dieciseis", 16],["dieciséis", 16],["diecisiete", 17],["dieciocho", 18],["diecinueve", 19],["veinte", 20],["ventiuna", 21],["ventiuno", 21],["veintiun", 21],["veintiún", 21],["veintiuno", 21],["veintiuna", 21],["veintidos", 22],["veintidós", 22],["veintitres", 23],["veintitrés", 23],["veinticuatro", 24],["veinticinco", 25],["veintiseis", 26],["veintiséis", 26],["veintisiete", 27],["veintiocho", 28],["veintinueve", 29],["treinta", 30]]);
	export const HolidayNames: ReadonlyMap<string, string[]> = new Map<string, string[]>([["fathers", ["diadelpadre"]],["mothers", ["diadelamadre"]],["thanksgiving", ["diadegracias","diadeacciondegracias"]],["martinlutherking", ["diademartinlutherking"]],["washingtonsbirthday", ["diadelpresidente"]],["labour", ["diadeltrabajadorusa"]],["columbus", ["diadelaraza","diadeladiversidadcultural"]],["memorial", ["diadelamemoria"]]]);
	export const DoubleNumbers: ReadonlyMap<string, number> = new Map<string, number>([["mitad", 0.5],["cuarto", 0.25]]);
	export const DateTokenPrefix = 'en ';
	export const TimeTokenPrefix = 'a las ';
	export const TokenBeforeDate = 'el ';
	export const TokenBeforeTime = 'la ';
	export const NextPrefixRegex = `(pr[oó]xim[oa]|siguiente)\\b`;
	export const PastPrefixRegex = `([uú]ltim[oa])\\b`;
	export const ThisPrefixRegex = `(est[ea])\\b`;
}
