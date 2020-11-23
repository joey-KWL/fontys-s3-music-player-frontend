import * as util from './util';

test('convert formatted minutes to seconds', () => {
	const seconds = util.convertMinutesToSeconds('1:20');

	expect(seconds).toBe(80);
});

test('Convert seconds to formatted time', () => {
	const time = util.formatTime('120');

	expect(time).toBe('2:00');
});

test('Format iso date to time ', () => {
	const isoTime1 = '2020-11-11T09:21:24.811Z';
	const isoTime2 = '2020-11-11T09:21:24Z';
	const isoTime3 = '2020-11-11T15:21:24.811Z';
	const isoTime4 = '2020-11-11T15:21:24Z';
	const time1 = util.formatIsoDateToTime(isoTime1);
	const time2 = util.formatIsoDateToTime(isoTime2);
	const time3 = util.formatIsoDateToTime(isoTime3);
	const time4 = util.formatIsoDateToTime(isoTime4);

	expect(time1).toBe('10:21');
	expect(time2).toBe('10:21');
	expect(time3).toBe('16:21');
	expect(time4).toBe('16:21');
});

test('format iso date to day month year ', () => {
	const unix1 = '2020-10-26 13:59:01.321';
	const unix2 = '2020-10-26 13:59:01';
	const unix3 = '2020-10-26';
	const time1 = util.formatUnixToDMY(unix1);
	const time2 = util.formatUnixToDMY(unix2);
	const time3 = util.formatUnixToDMY(unix3);

	const result = '26-10-2020';

	expect(time1).toBe(result);
	expect(time2).toBe(result);
	expect(time3).toBe(result);
});

test('format websocket data', () => {
	const songData = {
		accountId: 1,
		artistName: 'artistName',
		dateAdded: '26-10-2020',
		duration: '4:32',
		name: 'songName',
		songId: 12,
	};
	
	const result = util.websocketMessage(songData);
	const expectedResult = {
		artistName: 'artistName',
		date: new Date(),
		name: 'songName'
	};
	expect(result).toStrictEqual(expectedResult);
});
