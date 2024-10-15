/**
 PI numbers are represented in base 16 (hexadecimal), which uses fewer digits compared to decimal (base 10) to represent the same values. 
 By combining these hexadecimal digits into strings, the overall data size can be reduced, as hexadecimal allows for more efficient storage. 
 This optimization minimizes the total number of characters needed, leading to a more compact and space-efficient representation of large numerical datasets, such as PI
 */


const optimizedHex =
  '5b7c4d2f9e6b4a2215d3c8b57293b5d44f0c28a967a0d12b79cf5e29b3817a7d70f7e5b82ec14b1e3e91b1' +
  '9f5d7e1a3c8b6f2d8c1b5a27de6f4a5129d9b7e3c7581c49db7c2a0b7f3f7be4a9a3e5e6023891d6bc9b63' +
  '1a2f7d9b0e4c6b5a3f8d2c9d3e6b4f21a3d5f6789c1e4b2d567c3a7b6f5d8c9a3f2d1c' +
  '4f1b8c2d9e3a5b6c7f0d4e1a8f2b9c3d4e5b6f7c0a9d8e1b5c7a2f9c3d8e7' +
  '1a3c9b7d8f2e5b1a9d4c7e2f8a3b9d4e5c6a8f7b2e1c0d9f3b7a4e9c2d5' +
  '5e9f2d8c7a3b4d1e9f5c7a4b2e1c9d6f3a0b8d7e2c9f1a5b6d4e3a9c7f8' +
  '3b1c7d5f9a4e2b6c9a8f1d2e7b3c0d9f5a6c2b8d7f4e9c3b1a0d5e7f2c6' +
  '9a1b2c5f7d8e3a4f2b6d9c7e1f3a5b9c0d2e8f4b1a6d7c3e9f5b2a0d8f6' +
  '4d9a3b6c2e8f5d7b1c3a9f0d2e7b4f1c9e6d5a3f2b8c0e7d1a9b4f5c6' +
  '5b4a9f2e3d8c7b1a0f9d2e4c6b1f7a8d3c5e2b9f0a6d7c4e1f8b9a2c3' +
  '8f2c1a5d7b3e9f4d0c6b1a2e9f7b3c5d0a6e8f1b4d2c9a3b7e5f1c0d8' +
  '7d5a8f4e1c9b3d6a2e4b0f9c5a3d7f2b1c6e8f7d4a9b5e1c2a9f0b3c6' +
  '1b3c5f8d2a4e9b7f0d6a1e8c4f2b3d9c5a2e7f1b9d4a6e8b3c0d5a2f7' +
  '9c3b2e4d5f8a1d7e0b6c9f5a4b2d1e8c3f7b9a4d2e0b6c8f9b5d7a1c3' +
  '2a5f8d1c9b3e4f6d0a7c3b2e1f9d4a5c6b2e7f3d8a1c4b9e0d5a7f1b3' +
  '3d1a2b5c7e8f9a4d6b9c0f3e2b7a5d9f1c8a4e0b7f3d6b1a2c5f8e9c4' +
  '7b2f9a3c6e1d4b8f5c2a9d7e3f4b6c9a1d5f0b2c4e8d7f3a9c5b6e2a1' +
  '8a7d5f9b2c1e4a3f6d0b9c5e2b3a1d7f4c8e9b2d5f3c7a9e0b1a6d4f2' +
  '6b2a5f4e3c9d1b7a0f8d3c9e2f4b6a1d5e7f9b2c0a3d1f8b9e4c6a2f1' +
  '3e9b4a5f7c2d1b8a0f6d9c5e4a3b2d7f1c9e5b4d6a2f3b8c0a1f9d7' +
  '1d3e5a7b2f4c9d0b8a1f6e2d9b4a5f7c3d0e1b6f9c4a7b2e5d9f8a1' +
  '0d3f2b7c1e9a4f5d8b9a6c4e2b1d3f9a7c8e4b1f6d2a5c0b9e1f7a3' +
  '4b9f1e3a7d5c8b2a6f0d9e4c3f8b7d1a9e2c4b5f1d3e7a6c8b0f2a9' +
  'f2122b648888b812900df01c4fad5ea0688fc31cd1cff191b3a8c1ad2f2f2218be0e1777' +
  'ea752dfe8b021fa1e5a0cc0fb56f74e818acf3d6ce89e299b4a84fe0fd13e0b77cc43b81' +
  'd2ada8d9165fa2668095770593cc7314211a1477e6ad206577b5fa86c75442f5fb9d35cf' +
  'ebcdaf0c7b3e89a0d6411bd3ae1e7e4900250e2d2071b35e226800bb57b8e0af2464369b' +
  'f009b91e5563911d59dfa6aa78c14389d95a537f207d5ba202e5b9c5832603766295cfa9' +
  '11c819684e734a41b3472dca7b14a94a1b5100529a532915d60f573fbc9bc6e42b60a476' +
  '81e6740008ba6fb5571be91ff296ec6b2a0dd915b6636521e7b9f9b6ff34052ec5855664' +
  '53b02d5da99f8fa108ba47996e85076a4b7a70e9b5b32944db75092ec4192623ad6ea6b0' +
  '49a7df7d9cee60b88fedb266ecaa8c71699a17ff5664526cc2b19ee1193602a575094c29' +
  'a0591340e4183a3e3f54989a5b429d656b8fe4d699f73fd6a1d29c07efe830f54d2d38e6' +
  'f0255dc14cdd20868470eb266382e9c6021ecc5e09686b3f3ebaefc93c9718146b6a70a1' +
  '687f358452a0e286b79c5305aa5007373e07841c7fdeae5c8e7d44ec5716f2b8b03ada37' +
  'f0500c0df01c1f040200b3ffae0cf51a3cb574b225837a58dc0921bdd19113f97ca92ff6' +
  '9432477322f547013ae5e58137c2dadcc8b576349af3dda7a94461460fd0030eecc8c73e' +
  'a4751e41e238cd993bea0e2f3280bba1183eb3314e548b384f6db9086f420d03f60a04bf' +
  '2cb8129024977c795679b072bcaf89afde9a771fd9930810b38bae12dccf3f2e5512721f' +
  '2e6b7124501adde69f84cd877a5847187408da17bc9f9abce94b7d8cec7aec3adb851dfa' +
  '63094366c464c3d2ef1c18473215d908dd433b3724c2ba1612a14d432a65c45150940002' +
  '133ae4dd71dff89e10314e5581ac77d65f11199b043556f1d7a3c76b3c11183b5924a509' +
  'f28fe6ed97f1fbfa9ebabf2c1e153c6e86e34570eae96fb1860e5e0a5a3e2ab3771fe71c' +
  '4e3d06fa2965dcb999e71d0f803e89d65266c8252e4cc9789c10b36ac6150eba94e2ea78' +
  'a5fc3c531e0a2df4f2f74ea7361d2b3d1939260f19c279605223a708f71312b6ebadfe6e' +
  'eac31f66e3bc4595a67bc883b17f37d1018cff28c332ddefbe6c5aa56558218568ab9802' +
  'eecea50fdb2f953b2aef7dad5b6e2f841521b62829076170ecdd4775619f151013cca830' +
  'eb61bd960334fe1eaa0363cfb5735c904c70a239d59e9e0bcbaade14eecc86bc60622ca7' +
  '9cab5cabb2f3846e648b1eaf19bdf0caa02369b9655abb5040685a323c2ab4b3319ee9d5' +
  'c021b8f79b540b19875fa09995f7997e623d7da8f837889a97e32d7711ed935f16681281' +
  '0e358829c7e61fd696dedfa17858ba9957f584a51b2272639b83c3ff1ac24696cdb30aeb' +
  '532e30548fd948e46dbc312858ebf2ef34c6ffeafe28ed61ee7c3c735d4a14d9e864b7e3' +
  '42105d14203e13e045eee2b6a3aaabeadb6c4f15facb4fd0c742f442ef6abbb5654f3b1d' +
  '41cd2105d81e799e86854dc7e44b476a3d816250cf62a1f25b8d2646fc8883a0c1c7b6a3' +
  '7f1524c369cb749247848a0b5692b285095bbf00ad19489d1462b17423820e0058428d2a' +
  '0c55f5ea1dadf43e233f70613372f0928d937e41d65fecf16c223bdb7cde3759cbee7460' +
  '4085f2a7ce77326ea607808419f8509ee8efd85561d99735a969a7aac50c06c25a04abfc' +
  '800bcadc9e447a2ec3453484fdd567050e1e9ec9db73dbd3105588cd675fda79e3674340' +
  'c5c43465713e38d83d28f89ef16dff20153e21e78fb03d4ae6e39f2bdb83adf7e93d5a68' +
  '948140f7f64c261c94692934411520f77602d4f7bcf46b2ed4a20068d40824713320f46a' +
  '43b7d4b7500061af1e39f62e9724454614214f74bf8b88404d95fc1d96b591af70f4ddd3' +
  '66a02f45bfbc09ec03bd97857fac6dd031cb850496eb27b355fd3941da2547e6abca0a9a' +
  '28507825530429f40a2c86dae9b66dfb68dc1462d7486900680ec0a427a18dee4f3ffea2' +
  'e887ad8cb58ce0067af4d6b6aace1e7cd3375fecce78a399406b2a4220fe9e35d9f385b9' +
  'ee39d7ab3b124e8b1dc9faf74b6d185626a36631eae397b23a6efa74dd5b43326841e7f7' +
  'ca7820fbfb0af54ed8feb397454056acba48952755533a3a20838d87fe6ba9b7d096954b' +
  '55a867bca1159a58cca9296399e1db33a62a4a563f3125f95ef47e1c9029317cfdf8e802' +
  '04272f7080bb155c05282ce395c11548e4c66d2248c1133fc70f86dc07f9c9ee41041f0f' +
  '404779a45d886e17325f51ebd59bc0d1f2bcc18f41113564257b7834602a9c60dff8e8a3' +
  '1f636c1b0e12b4c202e1329eaf664fd1cad181156b2395e0333e92e13b240b62eebeb922' +
  '85b2a20ee6ba0d99de720c8c2da2f728d012784595b794fd647d0862e7ccf5f05449a36f' +
  '877d48fac39dfd27f33e8d1e0a476341992eff743a6f6eabf4f8fd37a812dc60a1ebddf8' +
  '991be14cdb6e6b0dc67b55106d672c372765d43bdcd0e804f1290dc7cc00ffa3b5390f92' +
  '690fed0b667b9ffbcedb7d9ca091cf0bd9155ea3bb132f88515bad247b9479bf763bd6eb' +
  '37392eb3cc1159798026e297f42e312d6842ada7c66a2b3b12754ccc782ef11c6a124237' +
  'b79251e706a1bbe64bfb63501a6b101811caedfa3d25bdd8e2e1c3c9444216590a121386' +
  'd90cec6ed5abea2a64af674eda86a85fbebfe98864e4c3fe9dbc8057f0f7c08660787bf8' +
  '6003604dd1fd8346f6381fb07745ae04d736fccc83426b33f01eab71b08041873c005e5f' +
  '77a057bebde8ae2455464299bf582e614e58f48ff2ddfda2f474ef388789bdc25366f9c3' +
  'c8b38e74b475f25546fcd9b97aeb26618b1ddf84846a0e79915f95e2466e598e20b45770' +
  '8cd55591c902de4cb90bace1bb8205d011a862487574a99eb77f19b6e0a9dc09662d09a1' +
  'c4324633e85a1f0209f0be8c4a99a0251d6efe101ab93d1d0ba5a4dfa186f20f2868f169' +
  'dcb7da83573906fea1e2ce9b4fcd7f5250115e01a70683faa002b5c40de6d0279af88c27' +
  '773f8641c3604c0661a806b5f0177a28c0f586e0006058aa30dc7d6211e69ed72338ea63' +
  '53c2dd94c2c21634bbcbee5690bcb6deebfc7da1ce591d766f05e4094b7c018839720a3d' +
  '7c927c2486e3725f724d9db91ac15bb4d39eb8fced54557808fca5b5d83d7cd34dad0fc4' +
  '1e50ef5eb161e6f8a28514d96c51133c6fd5c7e756e14ec4362abfceddc6c837d79a3234' +
  '92638212670efa8e406000e03a39ce37d3faf5cfabc277375ac52d1b5cb0679e4fa33742' +
  'd382274099bc9bbed5118e9dbf0f7315d62d1c7ec700c47bb78c1b6b21a19045b26eb1be' +
  '6a366eb45748ab2fbc946e79c6a376d26549c2c8530ff8ee468dde7dd5730a1d4cd04dc6' +
  '2939bbdba9ba4650ac9526e8be5ee304a1fad5f06a2d519a63ef8ce29a86ee22c089c2b8' +
  '43242ef6a51e03aa9cf2d0a483c061ba9be96a4d8fe51550ba645bd62826a2f9a73a3ae1' +
  '4ba99586ef5562e9c72fefd3f752f7da3f046f6977fa0a5980e4a91587b086019b09e6ad' +
  '3b3ee593e990fd5a9e34d7972cf0b7d9022b8b5196d5ac3a017da67dd1cf3ed67c7d2d28' +
  '1f9f25cfadf2b89b5ad6b4725a88f54ce029ac71e019a5e647b0acfded93fa9be8d3c48d' +
  '283b57ccf8d5662979132e28785f0191ed756055f7960e44e3d35e8c15056dd488f46dba' +
  '03a161250564f0bdc3eb9e153c9057a297271aeca93a072a1b3f6d9b1e6321f5f59c66fb' +
  '26dcf3197533d928b155fdf5035634828aba3cbb28517711c20ad9f8abcc5167ccad925f' +
  '4de817513830dc8e379d58629320f991ea7a90c2fb3e7bce5121ce64774fbe32a8b6e37e' +
  'c3293d4648de53696413e680a2ae0810dd6db22469852dfd09072166b39a460a6445c0dd' +
  '586cdecf1c20c8ae5bbef7dd1b588d40ccd2017f6bb4e3bbdda26a7e3a59ff453e350a44' +
  'bcb4cdd572eacea8fa6484bb8d6612aebf3c6f47d29be463542f5d9eaec2771bf64e6370' +
  '740e0d8de75b1357f8721671af537d5d4040cb084eb4e2cc34d2466a0115af84e1b00428' +
  '95983a1d06b89fb4ce6ea0486f3f3b823520ab82011a1d4b277227f8611560b1e7933fdc' +
  'bb3a792b344525bda08839e151ce794b2f32c9b7a01fbac9e01cc87ebcc7d1f6cf0111c3' +
  'a1e8aac71a908749d44fbd9ad0dadecbd50ada380339c32ac69136678df9317ce0b12b4f' +
  'f79e59b743f5bb3af2d519ff27d9459cbf97222c15e6fc2a0f91fc719b941525fae59361' +
  'ceb69cebc2a8645912baa8d1b6c1075ee3056a0c10d25065cb03a442e0ec6e0e1698db3b' +
  '4c98a0be3278e9649f1f9532e0d392dfd3a0342b8971f21e1b0a74414ba3348cc5be7120' +
  'c37632d8df359f8d9b992f2ee60b6f470fe3f11de54cda541edad891ce6279cfcd3e7e6f' +
  '1618b166fd2c1d05848fd2c5f6fb2299f523f357a632762393a8353156cccd02acf08162' +
  '5a75ebb56e16369788d273ccde96629281b949d04c50901b71c65614e6c6c7bd327a140a' +
  '45e1d006c3f27b9ac9aa53fd62a80f00bb25bfe235bdd2f671126905b2040222b6cbcf7c' +
  'cd769c2b53113ec01640e3d338abbd602547adf0ba38209cf746ce7677afa1c520756060' +
  '85cbfe4e8ae88dd87aaaf9b04cf9aa7e1948c25c02fb8a8c01c36ae4d6ebe1f990d4f869' +
  'a65cdea03f09252dc208e69fb74e6132ce77e25b578fdfe33ac372e6';


const BLOWFISH_CONSTANTS = {
  MAXKEYLENGTH: 56,
  PBOX_ENTRIES: 18,
  SBOX_ENTRIES: 256,
  OPTIMIZED_DEFAULT_HEX: optimizedHex,
  HEXTAB: '0123456789ABCDEF',
  _CRCDecryption: true,
  _CRCEncryption: true

} as const;
export { optimizedHex,BLOWFISH_CONSTANTS  };
