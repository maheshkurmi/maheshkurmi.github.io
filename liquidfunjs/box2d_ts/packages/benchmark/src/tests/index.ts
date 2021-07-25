import { TestFactory } from "../types";
import * as testMap from "./testMap";

export const tests: TestFactory[] = Object.keys(testMap).map((key) => (testMap as any)[key]);
