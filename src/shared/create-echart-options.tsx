import { baseEchartOptions } from "./base-echart-options";
import {px} from "./px";

export const createEchartOptions = (options) => {
    const result = {
        ... baseEchartOptions,
        ... options,
    };
    if (!(options?.xAxis?.axidLabel?.fontSize)) {
        result.xAxis = result.xAxis || {};
        result.xAxis.axidLabel = result.xAxis.axidLabel || {};
        result.xAxis.axidLabel.fontSize = px(12);
    }
    if (!(options?.yAxis?.axidLabel?.fontSize)) {
        result.yAxis = result.yAxis || {};
        result.yAxis.axidLabel = result.yAxis.axidLabel || {};
        result.yAxis.axidLabel.fontSize = px(12);
    }
    return result;
} 