// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: stakeibc/epoch_tracker.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type EpochTracker struct {
	EpochIdentifier string `protobuf:"bytes,1,opt,name=epochIdentifier,proto3" json:"epochIdentifier,omitempty"`
	EpochNumber     int64  `protobuf:"varint,2,opt,name=epochNumber,proto3" json:"epochNumber,omitempty"`
}

func (m *EpochTracker) Reset()         { *m = EpochTracker{} }
func (m *EpochTracker) String() string { return proto.CompactTextString(m) }
func (*EpochTracker) ProtoMessage()    {}
func (*EpochTracker) Descriptor() ([]byte, []int) {
	return fileDescriptor_cb60348ee619708f, []int{0}
}
func (m *EpochTracker) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EpochTracker) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EpochTracker.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EpochTracker) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EpochTracker.Merge(m, src)
}
func (m *EpochTracker) XXX_Size() int {
	return m.Size()
}
func (m *EpochTracker) XXX_DiscardUnknown() {
	xxx_messageInfo_EpochTracker.DiscardUnknown(m)
}

var xxx_messageInfo_EpochTracker proto.InternalMessageInfo

func (m *EpochTracker) GetEpochIdentifier() string {
	if m != nil {
		return m.EpochIdentifier
	}
	return ""
}

func (m *EpochTracker) GetEpochNumber() int64 {
	if m != nil {
		return m.EpochNumber
	}
	return 0
}

func init() {
	proto.RegisterType((*EpochTracker)(nil), "Stridelabs.stride.stakeibc.EpochTracker")
}

func init() { proto.RegisterFile("stakeibc/epoch_tracker.proto", fileDescriptor_cb60348ee619708f) }

var fileDescriptor_cb60348ee619708f = []byte{
	// 195 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x29, 0x2e, 0x49, 0xcc,
	0x4e, 0xcd, 0x4c, 0x4a, 0xd6, 0x4f, 0x2d, 0xc8, 0x4f, 0xce, 0x88, 0x2f, 0x29, 0x4a, 0x4c, 0xce,
	0x4e, 0x2d, 0xd2, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x0a, 0x2e, 0x29, 0xca, 0x4c, 0x49,
	0xcd, 0x49, 0x4c, 0x2a, 0xd6, 0x2b, 0x06, 0x33, 0xf5, 0x60, 0xea, 0x95, 0xa2, 0xb8, 0x78, 0x5c,
	0x41, 0x5a, 0x42, 0x20, 0x3a, 0x84, 0x34, 0xb8, 0xf8, 0xc1, 0x46, 0x78, 0xa6, 0xa4, 0xe6, 0x95,
	0x64, 0xa6, 0x65, 0xa6, 0x16, 0x49, 0x30, 0x2a, 0x30, 0x6a, 0x70, 0x06, 0xa1, 0x0b, 0x0b, 0x29,
	0x70, 0x71, 0x83, 0x85, 0xfc, 0x4a, 0x73, 0x93, 0x52, 0x8b, 0x24, 0x98, 0x14, 0x18, 0x35, 0x98,
	0x83, 0x90, 0x85, 0x9c, 0x3c, 0x4e, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23,
	0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0x4a,
	0x2f, 0x3d, 0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0xe2, 0x38, 0x5d, 0x9f,
	0xc4, 0xa4, 0x62, 0x7d, 0x88, 0xeb, 0xf4, 0x2b, 0xf4, 0xe1, 0xfe, 0x29, 0xa9, 0x2c, 0x48, 0x2d,
	0x4e, 0x62, 0x03, 0x7b, 0xc4, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0xa8, 0x8f, 0x0a, 0x4b, 0xe8,
	0x00, 0x00, 0x00,
}

func (m *EpochTracker) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EpochTracker) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EpochTracker) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.EpochNumber != 0 {
		i = encodeVarintEpochTracker(dAtA, i, uint64(m.EpochNumber))
		i--
		dAtA[i] = 0x10
	}
	if len(m.EpochIdentifier) > 0 {
		i -= len(m.EpochIdentifier)
		copy(dAtA[i:], m.EpochIdentifier)
		i = encodeVarintEpochTracker(dAtA, i, uint64(len(m.EpochIdentifier)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintEpochTracker(dAtA []byte, offset int, v uint64) int {
	offset -= sovEpochTracker(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *EpochTracker) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.EpochIdentifier)
	if l > 0 {
		n += 1 + l + sovEpochTracker(uint64(l))
	}
	if m.EpochNumber != 0 {
		n += 1 + sovEpochTracker(uint64(m.EpochNumber))
	}
	return n
}

func sovEpochTracker(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozEpochTracker(x uint64) (n int) {
	return sovEpochTracker(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *EpochTracker) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEpochTracker
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: EpochTracker: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EpochTracker: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EpochIdentifier", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEpochTracker
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthEpochTracker
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEpochTracker
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.EpochIdentifier = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EpochNumber", wireType)
			}
			m.EpochNumber = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEpochTracker
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EpochNumber |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipEpochTracker(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEpochTracker
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipEpochTracker(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowEpochTracker
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEpochTracker
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowEpochTracker
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthEpochTracker
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupEpochTracker
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthEpochTracker
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthEpochTracker        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowEpochTracker          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupEpochTracker = fmt.Errorf("proto: unexpected end of group")
)