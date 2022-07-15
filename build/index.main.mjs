// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Default(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Default expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Default expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:11:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:11:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v57, time: v56, didSend: v22, from: v55 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v57, time: v56, didSend: v22, from: v55 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v63, time: v62, didSend: v32, from: v61 } = txn2;
  ;
  const v64 = stdlib.addressEq(v61, v55);
  const v65 = v64 ? false : true;
  stdlib.assert(v65, {
    at: './index.rsh:16:12:application',
    fs: [],
    msg: null,
    who: 'Default'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v55],
    evt_cnt: 0,
    funcNum: 2,
    lct: v62,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:19:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v68, time: v67, didSend: v40, from: v66 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v68, time: v67, didSend: v40, from: v66 } = txn3;
  ;
  const v69 = stdlib.addressEq(v55, v66);
  stdlib.assert(v69, {
    at: './index.rsh:19:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Default'
    });
  return;
  
  
  
  
  
  
  };
export async function User(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v57, time: v56, didSend: v22, from: v55 } = txn1;
  ;
  const v58 = ctc.selfAddress();
  const v59 = stdlib.addressEq(v58, v55);
  const v60 = v59 ? false : true;
  stdlib.assert(v60, {
    at: './index.rsh:14:27:application',
    fs: ['at ./index.rsh:14:14:application call to [unknown function] (defined at: ./index.rsh:14:18:function exp)'],
    msg: null,
    who: 'User'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v55],
    evt_cnt: 0,
    funcNum: 1,
    lct: v56,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:15:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v63, time: v62, didSend: v32, from: v61 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v63, time: v62, didSend: v32, from: v61 } = txn2;
  ;
  const v64 = stdlib.addressEq(v61, v55);
  const v65 = v64 ? false : true;
  stdlib.assert(v65, {
    at: './index.rsh:16:12:application',
    fs: [],
    msg: null,
    who: 'User'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v68, time: v67, didSend: v40, from: v66 } = txn3;
  ;
  const v69 = stdlib.addressEq(v55, v66);
  stdlib.assert(v69, {
    at: './index.rsh:19:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc0, await interact.show(v66), {
    at: './index.rsh:20:23:application',
    fs: ['at ./index.rsh:20:23:application call to [unknown function] (defined at: ./index.rsh:20:23:function exp)', 'at ./index.rsh:20:23:application call to "liftedInteract" (defined at: ./index.rsh:20:23:application)'],
    msg: 'show',
    who: 'User'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAECJgIBAAAiNQAxGEEBFylkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAGZJJAxAACckEkQkNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbA0AzEAEkRCAGxIIzQBEkQ0BEkiEkw0AhIRRChkSTUDNf+ABJqLkXSwMQA0/xNENP8oSwFXACBnSCQ1ATIGNQJCAE9IgaCNBogAmCI0ARJENARJIhJMNAISEUSABF8Nq/qwMQAoSwFXACBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161090d38038061090d8339810160408190526100229161018d565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d341560076100cb565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100c39291906100f4565b505050610230565b816100f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610100906101f5565b90600052602060002090601f0160209004810192826101225760008555610168565b82601f1061013b57805160ff1916838001178555610168565b82800160010185558215610168579182015b8281111561016857825182559160200191906001019061014d565b50610174929150610178565b5090565b5b808211156101745760008155600101610179565b60006040828403121561019f57600080fd5b604080519081016001600160401b03811182821017156101cf57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101e957600080fd5b60208201529392505050565b600181811c9082168061020957607f821691505b6020821081141561022a57634e487b7160e01b600052602260045260246000fd5b50919050565b6106ce8061023f6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a159146100785780637eea518c1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461054b565b6100d6565b61005261009936600461054b565b61026d565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86103b3565b60405161006f929190610563565b6100e6600160005414600a610450565b610100813515806100f957506001548235145b600b610450565b600080805560028054610112906105c0565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906105c0565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906105f5565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101d692919061065b565b60405180910390a16101ea34156008610450565b8051610210906001600160a01b03163314610206576001610209565b60005b6009610450565b60408051602081019091526000815281516001600160a01b03168082526002600055436001556040805160208101929092520160405160208183030381529060405260029080519060200190610267929190610475565b50505050565b61027d600260005414600e610450565b6102978135158061029057506001548235145b600f610450565b6000808055600280546102a9906105c0565b80601f01602080910402602001604051908101604052809291908181526020018280546102d5906105c0565b80156103225780601f106102f757610100808354040283529160200191610322565b820191906000526020600020905b81548152906001019060200180831161030557829003601f168201915b505050505080602001905181019061033a91906105f5565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161036d92919061065b565b60405180910390a16103813415600c610450565b8051610399906001600160a01b03163314600d610450565b600080805560018190556103af906002906104f9565b5050565b6000606060005460028080546103c8906105c0565b80601f01602080910402602001604051908101604052809291908181526020018280546103f4906105c0565b80156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b50505050509050915091509091565b816103af5760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610481906105c0565b90600052602060002090601f0160209004810192826104a357600085556104e9565b82601f106104bc57805160ff19168380011785556104e9565b828001600101855582156104e9579182015b828111156104e95782518255916020019190600101906104ce565b506104f5929150610536565b5090565b508054610505906105c0565b6000825580601f10610515575050565b601f0160209004906000526020600020908101906105339190610536565b50565b5b808211156104f55760008155600101610537565b60006040828403121561055d57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156105975785810183015185820160600152820161057b565b818111156105a9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806105d457607f821691505b6020821081141561055d57634e487b7160e01b600052602260045260246000fd5b60006020828403121561060757600080fd5b6040516020810181811067ffffffffffffffff8211171561063857634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461065257600080fd5b81529392505050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461068957600080fd5b8060408501525050939250505056fea26469706673582212207aade329c07bac72d0fc59913d518ff01f2b1b72c2322a3d9d9ee80c7654008664736f6c634300080c0033`,
  BytecodeLen: 2317,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:12:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:17:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:21:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Default": Default,
  "User": User
  };
export const _APIs = {
  };
