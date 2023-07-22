// 테스트 유틸 라이브러리 로딩
import SignupForm from './SignupForm';
// 컴포넌트 로딩

const { shallowMount } = require('@vue/test-utils');

describe('SignupForm.vue', () => {
  test('회원가입 테스트', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const idInput = wrapper.find('#username');
    console.log(idInput.value);
  });
});
