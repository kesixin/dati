// component/privacy/privacy.js
Component({
    /**
     * 组件的初始数据
     */
    data: {
        privacyContractName: '',
        showPrivacy: false
    },
    /**
     * 组件的生命周期
     */
    pageLifetimes: {
        show() {
            const _ = this
            const version = wx.getAppBaseInfo().SDKVersion
            if (_.compareVersion(version, '2.32.3') >= 0) {
                wx.getPrivacySetting({
                    success(res) {
                        if (res.errMsg == "getPrivacySetting:ok") {
                            _.setData({
                                privacyContractName: res.privacyContractName,
                                showPrivacy: res.needAuthorization
                            })
                        }
                    }
                })
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 打开隐私协议页面
        openPrivacyContract() {
            const _ = this
            wx.openPrivacyContract({
                fail: () => {
                    wx.showToast({
                        title: '遇到错误',
                        icon: 'error'
                    })
                }
            })
        },
        // 拒绝隐私协议
        exitMiniProgram() {
            wx.showToast({
                title: '同意后才可以继续使用当前小程序',
                icon: 'none'
            })
        },
        // 同意隐私协议
        handleAgreePrivacyAuthorization() {
            const _ = this
            _.setData({
                showPrivacy: false
            })
        },
        // 比较版本号
        compareVersion(v1, v2) {
            v1 = v1.split('.')
            v2 = v2.split('.')
            const len = Math.max(v1.length, v2.length)

            while (v1.length < len) {
                v1.push('0')
            }
            while (v2.length < len) {
                v2.push('0')
            }

            for (let i = 0; i < len; i++) {
                const num1 = parseInt(v1[i])
                const num2 = parseInt(v2[i])

                if (num1 > num2) {
                    return 1
                } else if (num1 < num2) {
                    return -1
                }
            }

            return 0
        },
        // 通过绑定空事件禁止滑动事件的穿透
        handleCatchtouchMove() {
            return
        }
    },
})