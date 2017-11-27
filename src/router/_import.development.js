/**
 * Created by mt on 2017/11/27.
 */
module.exports = file => () => import('@/views/' + file + '.vue')
