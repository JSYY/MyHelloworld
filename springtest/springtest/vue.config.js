module.exports = {
    outputDir: 'F:\\SpringDemo\\src\\main\\resources\\static',
    devServer: {
        open: true,
        host: 'localhost',
        https: false,
        hotOnly: false,
        headers: {
            "Cross-Origin-Embedder-Policy": "require-corp",
            "Cross-Origin-Opener-Policy": "same-origin"
        },
        proxy: {  //���ÿ���
            '/api': {
                target: 'http://localhost:8088',  //�����̨�ĵ�ַģ���;Ӧ����д������ʵ�ĺ�̨�ӿ�
                changOrigin: true,  //�������
                pathRewrite: {
                    '^/api': '/api',//��д,
                }
            }
        }
    },
}