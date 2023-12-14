import { describe, expect, test, vi } from 'vitest';
import { logInfo, now, updateProp } from '../purify';

declare global {
  // can't use let or const to declare a global variable
  // eslint-disable-next-line no-var
  var launchNuclearMissiles: () => void;
}

describe('Purify', () => {
  test('updateProp()', () => {
    const obj = { a: 1 };

    const result = updateProp(obj, 'a', 2);

    expect(result).toEqual({ a: 2 });
    expect(obj).toEqual({ a: 1 });
  });

  test('logInfo()', () => {
    global.launchNuclearMissiles = vi.fn(() => {
      console.error(`
          💥 BOOM!

          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXNWMMMWNNKXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMWNXOxddodkOkxooloxkKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMNOdo:;:cllc:;;:::ccccldkOKWMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMWXkoc:;'',,;::ccc;',,;;;;:::lxOKNWMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMWXX0o::;,'',,,;;::;:;,,;;:,,,,;:ccodO0KXWMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMN0xdol:;;,'''..''''..',,,;col:cc::cll:cl:cdxxkXWMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMNOxolc:;,,'''''.........';:cll:;,;coolc,',,,,,;;;lkXWMMMMMMMMMMMMM
          MMMMMMMMMMMMMXdloc;,''..',,'...........,;;,'...',:cc:,,'..''',;;:l0MMMMMMMMMMMMM
          MMMMMMMMMMMWXdloc,';c:'',,,,,..........................,;'.......;kWMMMMMMMMMMMM
          MMMMMMMMMMM0c;:;,..,,,,'................................,;''.',,,,ckNMMMMMMMMMMM
          MMMMMMMMMMXl';'............................................'',;'''.;OWMMMMMMMMMM
          MMMMMMMMMWx'.''.....................................................cKMMMMMMMMMM
          MMMMMMMMMMXl....................','.'.......'''...''................:KMMMMMMMMMM
          MMMMMMMMMMWo...........',;::cc::cc:,,,,,'',,',;::::;,,'''''......''.'xWMMMMMMMMM
          MMMMMMMMMMWO;...'''':oooodxkOOkxxdl:,,:;''''';lddxxxdooolcc;'..''.;lxXMMMMMMMMMM
          MMMMMMMMMMMWXxc'.'',;cclooxkkOkxxdc;,,::;,'',:dkxxkkxxxolll:'.'''c0WMMMMMMMMMMMM
          MMMMMMMMMMMMMMNOoc,',''',;;:cllcloc,,'','',,,;ccc:llc:;,''',,;ldONMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMW0dl::;,,''''''',,','....','''''',,',,:lldkOXWMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMWNNKOOOOxdddooo:'.....',,cdoodddkk0XNWWMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKk:........;kWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMWKkddxdc:;,'''''''';cldO0KXKKNWMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMN0kd:'',,:ldl,.....'''';::;;;:;;:oxkOKNWMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMWNNX0kdlc::;,''.....'.',:::::coxO0KXXNWMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXK0d,.........;ok0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk,.....'...oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc.....',,.':0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMO;'.....,,..;0MMMMMMMMMWXNMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:.....'....lNMMMMMMMWWWWMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:.....''..'oNMMMWWMMWWMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMWNWMMMMMMN0l,,.........lNMMWNNNWMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMWNKkxOXx,'''.........'lxdol:;cxXMMMWWMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMWNWMMMMMMMMXd:'..'::'.............''......:0MMMWWMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMWWMMMMMMWNk;.........'..'''''...........,dkkx0WMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMNKOkddxxd:,...............'..................,ldoclxKXOONMMMMMMMMMM
          MMMMMMMMMMMMMXOxxxxxxxxxxxddxdddxxxxddxxxxdxxxxxddxxddxdddxxdddddkOkkNMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
      `);
    });
    const globalLog = vi.spyOn(console, 'log');
    const localLog = vi.fn();
    type Log = (log: () => void) => void;

    (logInfo as Log)(localLog);

    expect(globalLog).not.toBeCalled();
    expect(localLog).toBeCalledWith(expect.any(String));
  });

  const nowIsAPureFunction = typeof now() === 'function';

  test('now()', () => {
    expect(nowIsAPureFunction).toBe(true);
  });
});
