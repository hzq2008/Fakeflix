/*
 * @Author: your name
 * @Date: 2021-08-03 10:12:39
 * @LastEditTime: 2021-08-03 15:32:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Fakeflix\src\redux\auth\auth.selectors.js
 */
import { createSelector } from "reselect";  // 正统的reselect函数，可以在输入相同的情况下跳过计算，直接给出缓存的结果,适用于redux场景

const selectUser = (state) => state.auth;
/**
 * @description: 
 * createSelector的所有参数都是函数
 * 前面的函数拥有相同的输入，比如都是state
 * 最后一个函数的输入是前面所有函数的输出
 * 最后一个函数的输出就是reselect函数的输出
 * @param {*}
 * @return {*}
 */
export const selectCurrentUser = createSelector(
    [selectUser],
    auth => auth.currentUser
);

export const selectAuthLoadingState = createSelector(
	[selectUser],
	auth => auth.loading
);

export const selectAuthErrors = createSelector(
    [selectUser],
    auth => auth.error
);