import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Data Point Formatting Card
 */
declare class DataPointCardSettings extends FormattingSettingsCard {
    defaultColor: formattingSettings.ColorPicker;
    showAllDataPoints: formattingSettings.ToggleSwitch;
    fill: formattingSettings.ColorPicker;
    fillRule: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
* visual settings model class
*
*/
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    dataPointCard: DataPointCardSettings;
    demoSectionCard: DemoSection;
    cards: DemoSection[];
}
declare class DemoSection extends FormattingSettingsCard {
    title: formattingSettings.TextInput;
    name: string;
    displayName?: string;
    slices: Array<FormattingSettingsSlice>;
}
export {};