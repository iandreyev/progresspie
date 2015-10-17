/**
 * @license 
 * Copyright (c) 2015, Immo Schulz-Gerlach, www.isg-software.de 
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are 
 * permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT 
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, 
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED 
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; 
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
 * WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function($){var t=function(t,e,n){var i=n.newSvgElement("text");i.setAttribute("x",0),i.setAttribute("y",0),i.setAttribute("dy","0.33em"),i.style.textAnchor="middle",i.style.fill=n.color;var r="number"==typeof n.fontSizeFactor?n.fontSizeFactor:n.singleLine?.9:1;i.style.fontSize=n.radius*r;var o=n.newSvgSubelement(i,"tspan");if(o.textContent=t,"string"==typeof e){var u=n.newSvgSubelement(i,"tspan");u.textContent=e,n.singleLine||(u.setAttribute("dy","1.1em"),u.setAttribute("x",0));var s="number"==typeof n.unitFontSizeFactor?n.unitFontSizeFactor:.35;u.style.fontSize=n.radius*s}};$.fn.progressPie.svgContentPlugin.percent=function(e){t(Math.round(e.percentValue),"%",e)},$.fn.progressPie.svgContentPlugin.rawValue=function(e){t(e.rawValue,e.unit,e)}}(jQuery);