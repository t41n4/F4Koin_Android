import { Alert } from "react-native";

export  function ProcessResultCode(Url) {

    const params = Url.includes('return?') ? Url.split('?')[1].split('&') : 'nothing';
    console.log('Params: ', params)
    if (params === 'nothing') {
      return false;
    }
    const resultCode = params.find(param => {
      const [key, value] = param.split('=');
      // console.log(value);
      if (key === 'resultCode') {
        return value;
      }
    }).split('=')[1];
    console.log('ResultCode: ', resultCode )
    switch (parseInt(resultCode)) {
      case 0:
        alert('Giao dịch thành công.')
        console.log('Giao dịch thành công.')
        return true;
      case 9000:
        alert('Giao dịch đã được xác nhận thành công.')
        console.log('Giao dịch đã được xác nhận thành công.')
        return false;
      case 8000:
        alert('Giao dịch đang ở trạng thái cần được người dùng xác nhận thanh toán lại.')
        console.log('Giao dịch đang ở trạng thái cần được người dùng xác nhận thanh toán lại.')
        return false;
      case 7000:
        alert('Giao dịch đang được xử lý.')
        console.log('Giao dịch đang được xử lý.')
        return false;
      case 7002:
        alert('Giao dịch đang được xử lý bởi nhà cung cấp loại hình thanh toán.')
        console.log('Giao dịch đang được xử lý bởi nhà cung cấp loại hình thanh toán.')
        return false;
      case 1000:
        alert('Giao dịch đã được khởi tạo, chờ người dùng xác nhận thanh toán.')
        console.log('Giao dịch đã được khởi tạo, chờ người dùng xác nhận thanh toán.')
        return false;
      case 11:
        alert('Truy cập bị từ chối.')
        console.log('Truy cập bị từ chối.')
        return false;
      case 12:
        alert('Phiên bản API không được hỗ trợ cho yêu cầu này.')
        console.log('Phiên bản API không được hỗ trợ cho yêu cầu này.')
        return false;
      case 13:
        alert('Xác thực doanh nghiệp thất bại.')
        console.log('Xác thực doanh nghiệp thất bại.')
        return false;
      case 20:
        alert('Yêu cầu sai định dạng.')
        console.log('Yêu cầu sai định dạng.')
        return false;
      case 22:
        alert('Số tiền giao dịch không hợp lệ.')
        console.log('Số tiền giao dịch không hợp lệ.')
        return false;
      case 40:
        alert('RequestId bị trùng.')
        console.log('RequestId bị trùng.')
        return false;
      case 41:
        alert('OrderId bị trùng.')
        console.log('OrderId bị trùng.')
        return false;
      case 42:
        alert('OrderId không hợp lệ hoặc không được tìm thấy.')
        console.log('OrderId không hợp lệ hoặc không được tìm thấy.')
        return false;
      case 43:
        alert('Yêu cầu bị từ chối vì xung đột trong quá trình xử lý giao dịch.')
        console.log('Yêu cầu bị từ chối vì xung đột trong quá trình xử lý giao dịch.')
        return false;
      case 1001:
        alert('Giao dịch thanh toán thất bại do tài khoản người dùng không đủ tiền.')
        console.log('Giao dịch thanh toán thất bại do tài khoản người dùng không đủ tiền.')
        return false;
      case 1002:
        alert('Giao dịch bị từ chối do nhà phát hành tài khoản thanh toán.')
        console.log('Giao dịch bị từ chối do nhà phát hành tài khoản thanh toán.')
        return false;
      case 1003:
        alert('Giao dịch bị đã bị hủy.')
        console.log('Giao dịch bị đã bị hủy.')
        return false;
      case 1004:
        alert('Giao dịch thất bại do số tiền thanh toán vượt quá hạn mức thanh toán của người dùng.')
        console.log('Giao dịch thất bại do số tiền thanh toán vượt quá hạn mức thanh toán của người dùng.')
        return false;
      case 1005:
        alert('Giao dịch thất bại do url hoặc QR code đã hết hạn.')
        console.log('Giao dịch thất bại do url hoặc QR code đã hết hạn.')
        return false;
      case 1006:
        alert('Giao dịch thất bại do người dùng đã từ chối xác nhận thanh toán.')
        console.log('Giao dịch thất bại do người dùng đã từ chối xác nhận thanh toán.')
        return false;
      case 1007:
        alert('Giao dịch bị từ chối vì tài khoản người dùng đang ở trạng thái tạm khóa.')
        console.log('Giao dịch bị từ chối vì tài khoản người dùng đang ở trạng thái tạm khóa.')
        return false;
      case 1026:
        alert('Giao dịch bị hạn chế theo thể lệ chương trình khuyến mãi.')
        console.log('Giao dịch bị hạn chế theo thể lệ chương trình khuyến mãi.')
        return false;
      case 1030:
        alert('Đơn hàng thanh toán thất bại do thông tin không hợp lệ.')
        console.log('Đơn hàng thanh toán thất bại do thông tin không hợp lệ.')
        return false;
      case 1080:
        alert('Giao dịch hoàn tiền bị từ chối. Giao dịch thanh toán ban đầu không được tìm thấy.')
        console.log('Giao dịch hoàn tiền bị từ chối. Giao dịch thanh toán ban đầu không được tìm thấy.')
        return false;
      case 1081:
        alert('Giao dịch hoàn tiền bị từ chối. Giao dịch thanh toán ban đầu có thể đã được hoàn.')
        console.log('Giao dịch hoàn tiền bị từ chối. Giao dịch thanh toán ban đầu có thể đã được hoàn.')
        return false;
      case 2001:
        alert('Giao dịch thất bại do sai thông tin liên kết.')
        console.log('Giao dịch thất bại do sai thông tin liên kết.')
        return false;
      case 2007:
        alert('Giao dịch thất bại do liên kết hiện đang bị tạm khóa.')
        console.log('Giao dịch thất bại do liên kết hiện đang bị tạm khóa.')
        return false;
      case 3001:
        alert('Liên kết thất bại do người dùng từ chối xác nhận.')
        console.log('Liên kết thất bại do người dùng từ chối xác nhận.')
        return false;
      case 3002:
        alert('Liên kết bị từ chối do không thỏa quy tắc liên kết.')
        console.log('Liên kết bị từ chối do không thỏa quy tắc liên kết.')
        return false;
      case 3003:
        alert('Hủy liên kết bị từ chối do đã vượt quá số lần hủy.')
        console.log('Hủy liên kết bị từ chối do đã vượt quá số lần hủy.')
        return false;
      case 3004:
        alert('Liên kết này không thể hủy do có giao dịch đang chờ xử lý.')
        console.log('Liên kết này không thể hủy do có giao dịch đang chờ xử lý.')
        return false;
      case 4001:
        alert('Giao dịch bị hạn chế do người dùng chưa hoàn tất xác thực tài khoản.')
        console.log('Giao dịch bị hạn chế do người dùng chưa hoàn tất xác thực tài khoản.')
        return false;
      case 4010:
        alert('Quá trình xác minh OTP thất bại.')
        console.log('Quá trình xác minh OTP thất bại.')
        return false;
      case 4011:
        alert('OTP chưa được gửi hoặc hết hạn.')
        console.log('OTP chưa được gửi hoặc hết hạn.')
        return false;
      case 4100:
        alert('Giao dịch thất bại do người dùng không đăng nhập thành công.')
        console.log('Giao dịch thất bại do người dùng không đăng nhập thành công.')
        return false;
      case 4015:
        alert('Quá trình xác minh 3DS thất bại.')
        console.log('Quá trình xác minh 3DS thất bại.')
        return false;
      case 10:
        alert('Hệ thống đang được bảo trì.')
        console.log('Hệ thống đang được bảo trì.')
        return false;
      case 99:
        alert('Lỗi không xác định.')
        console.log('Lỗi không xác định.')
        return false;
      default:
        return false;
    }
  }

