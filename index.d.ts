declare module 'cap' {
  import EventEmitter = NodeJS.EventEmitter;

  interface DeviceInfo {
    name: string;
    addresses: NetworkInfo[];
    flags?: string;
  }

  interface NetworkInfo {
    addr: string;
    netmask: string;
    bradaddr?: string;
    dstaddr?: string;
  }

  interface EthernetInfo {
    info: {
      dstmac: string;
      srcmac: string;
      type: number;
      vlan: {
        priority: number;
        CFI: number;
        VID: number;
      };
      length: number;
    };
    offset: number;
  }

  interface IPV4Info {
    info: {
      hdrlen: number;
      dscp: number;
      ecn: number;
      totallen: number;
      id: number;
      flags: number;
      fragoffset: number;
      ttl: number;
      protocol: number;
      hdrchecksum: number;
      srcaddr: string;
      dstaddr: string;
      options: undefined
    };
    hdrlen: number;
    offset: number;
  }

  interface IPV6Info {
    info: {
      'class': number;
      flowLabel: number;
      extensions: number;
      protocol: number;
      hopLimit: number;
      srcaddr: string;
      dstaddr: string;
    };
    payloadlen: number;
    offset: number;
  }

  interface ICMPV4Info {
    info: {
      type: number;
      code: number;
      checksum: number;

      identifier: number;
      seqno: number;

      nextHopMTU: number;
      IPHeader: {
        info: IPV4Info;
        hdrlen: number;
      };
      dataOffset: number;

      gatewayAddr: string;

      pointer: number;

      lifetime: number;
      addrs: string;

      originate: number;

      receive: number;
      transmit: number;

      mask: string;

      outHopCount: number;
      retHopCount: number;
      outLnkSpeed: number;
      outLnkMTU: number;
    };
    offset: number;
  }

  interface TCPInfo {
    info: {
      srcport: number;
      dstport: number;
      seqno: number;
      ackno: number;
      flags: number;
      window: number;
      checksum: number;
      urgentptr: number;
      options: number;
    },
    hdrlen: number;
    offset: number;
  }

  interface UDPInfo {
    info: {
      srcport: number;
      dstport: number;
      length: number;
      checksum: number;
    };
    offset: number;
  }

  interface SCTPInfo {
    info: {
      srcport: number;
      dstport: number;
      verifyTag: number;
      checksum: number;
      chunks: number;
    };
    offset: number;
  }

  interface ARPInfo {
    info: {
      hardwareaddr: number;
      protocol: number;
      hdrlen: number;
      protlen: number;
      opcode: number;
      sendermac: string;
      senderip: string;
      targetmac: string;
      targetip: string;
    };
    offset: number;
  }
  interface EthernetProtocolType {
    IPV4: number;
    'X.75': number;
    CHAOSNET: number;
    'X.25': number;
    ARP: number;
    'ARP-RELAY': number;
    TRILL: number;
    'L2-IS-IS': number;
    'ARP-REVERSE': number;
    APPLETALK: number;
    'APPLETALK-AARP': number;
    VLAN: number;
    SNMP: number;
    XTP: number;
    IPV6: number;
    'TCPIP-COMPRESS': number;
    PPP: number;
    GSMP: number;
    'PPPOE-DISCOVER': number;
    'PPPOE-SESSION': number;
    'LOOPBACK': number;

  }

  interface IpProtocolType {
    HOPOPT: number;
    ICMP: number;
    IGMP: number;
    GGP: number;
    IPV4: number;
    ST: number;
    TCP: number;
    CBT: number;
    EGP: number;
    IGP: number;
    'BBN-RCC-MON': number;
    'NVP-II': number;
    PUP: number;
    ARGUS: number;
    EMCON: number;
    XNET: number;
    CHAOS: number;
    UDP: number;
    MUX: number;
    'DCN-MEAS': number;
    HMP: number;
    PRM: number;
    'XNS-IDP': number;
    'TRUNK-1': number;
    'TRUNK-2': number;
    'LEAF-1': number;
    'LEAF-2': number;
    'RDP': number;
    'IRTP': number;
    'ISO-TP4': number;
    'NETBLT': number;
    'MFE-NSP': number;
    'MERIT-INP': number;
    'DCCP': number;
    '3PC': number;
    'IDPR': number;
    'XTP': number;
    'DDP': number;
    'IDPR-CMTP': number;
    'TP++': number;
    'IL': number;
    'IPV6': number;
    'SDRP': number;
    'IPV6-ROUTE': number;
    'IPV6-FRAG': number;
    'IDRP': number;
    'RSVP': number;
    'GRE': number;
    'DSR': number;
    'BNA': number;
    'ESP': number;
    'AH': number;
    'I-NLSP': number;
    'SWIPE': number;
    'NARP': number;
    'MOBILE': number;
    'TLSP': number;
    'SKIP': number;
    'ICMPV6': number;
    'IPV6-NONXT': number;
    'IPV6-OPTS': number;
    'SAT-EXPAK': number;
    'KRYPTOLAN': number;
    'RVD': number;
    'IPPC': number;
    'SAT-MON': number;
    'VISA': number;
    'IPCV': number;
    'CPNX': number;
    'CPHB': number;
    'WSN': number;
    'PVP': number;
    'BR-SAT-MON': number;
    'SUN-ND': number;
    'WB-MON': number;
    'WB-EXPAK': number;
    'ISO-IP': number;
    'VMTP': number;
    'SECURE-VMTP': number;
    'VINES': number;
    'TTP': number;
    'IPTM': number;
    'NSFNET-IGP': number;
    'DGP': number;
    'TCF': number;
    'EIGRP': number;
    'OSPFIGP': number;
    'SPRITE-RPC': number;
    'LARP': number;
    'MTP': number;
    'AX.25': number;
    'IPIP': number;
    'MICP': number;
    'SCC-SP': number;
    'ETHERIP': number;
    'ENCAP': number;
    'GMTP': number;
    'IFMP': number;
    'PNNI': number;
    'PIM': number;
    'ARIS': number;
    'SCPS': number;
    'QNX': number;
    'A/N': number;
    'IPCOMP': number;
    'SNP': number;
    'COMPAQ-PEER': number;
    'IPX-IN-IP': number;
    'VRRP': number;
    'PGM': number;
    'L2TP': number;
    'DDX': number;
    'IATP': number;
    'STP': number;
    'SRP': number;
    'UTI': number;
    'SMP': number;
    'SM': number;
    'PTP': number;
    'ISIS': number;
    'FIRE': number;
    'CRTP': number;
    'CRUDP': number;
    'SSCOPMCE': number;
    'IPLT': number;
    'SPS': number;
    'PIPE': number;
    'SCTP': number;
    'FC': number;
    'RSVP-E2E-IGNORE': number;
    'MOBILITY HEADER': number;
    'UDPLITE': number;
    'MPLS-IN-IP': number;
    'MANET': number;
    'HIP': number;
    'SHIM6': number;
    'WESP': number;
    'ROHC': number;
  }
  interface DecoderStatic {
    // Link Layer Protocols
    Ethernet(buf: Buffer, bufOffset?: number): EthernetInfo;

    // Internet Layer Protocols
    IPV4(buf: Buffer, bufOffset?: number): IPV4Info;
    IPV6(buf: Buffer, bufOffset?: number): IPV6Info;
    ICMPV4(buf: Buffer, nbytes: number, bufOffset?: number): ICMPV4Info;

    //Transport Layer Protocols
    TCP(buf: Buffer, bufOffset?: number): TCPInfo;
    UDP(buf: Buffer, bufOffset?: number): UDPInfo;
    SCTP(buf: Buffer, nbytes: number, bufOffset?: number): SCTPInfo;
    ARP(buf: Buffer, bufOffset?: number): ARPInfo;
    PROTOCOL: {
      ETHERNET: EthernetProtocolType;
      IP: IpProtocolType;
    };
  }

  interface CapStatic {
    new(): Cap;

    findDevice(ip?: string): string;

    deviceList(): DeviceInfo[];
  }

  interface Cap extends EventEmitter {
    open(device: string, filter: string, bufSize: number, buffer: Buffer): string;

    close(): void;

    send(buffer: Buffer, nBytes?: number): void;

    // Windows ONLY
    setMinBytes?(nBytes: number): void;
  }

  const Cap: CapStatic;
  const decoders: DecoderStatic;
}