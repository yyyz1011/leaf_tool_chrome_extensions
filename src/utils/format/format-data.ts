// 数据生成工具和格式转换

export function formatDataTest() {}

/**
 * 获取当前时间时间戳
 * @returns
 */
export function formatGenerateTimestamp(): number {
	return Date.parse(new Date().toString());
}

/**
 * 时间戳转时间
 * @param timestamp
 * @returns
 */
export function formatConvertTimestamp(timestamp: number): string {
	return new Date(timestamp).toLocaleString();
}

/**
 * 时间转时间戳
 * @param time
 * @returns
 */
export function formatCovetTime(time: string): number {
	return Date.parse(time);
}

/**
 * 生成uuid
 * @param simple 是否为不带横线的
 * @returns
 */
export function formatGenerateUUID(simple: boolean): string {
	let uuidValue = '',
		k,
		randomValue;
	for (k = 0; k < 32; k++) {
		randomValue = (Math.random() * 16) | 0;
		if (!simple && (k == 8 || k == 12 || k == 16 || k == 20)) {
			uuidValue += '-';
		}
		uuidValue += (
			k == 12 ? 4 : k == 16 ? (randomValue & 3) | 8 : randomValue
		).toString(16);
	}
	return uuidValue;
}
