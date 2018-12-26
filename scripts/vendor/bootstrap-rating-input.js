(function($){$.fn.rating=function(){var element;function _paintValue(ratingInput,value,active_icon,inactive_icon){var selectedStar=$(ratingInput).find('[data-value="'+value+'"]');selectedStar.removeClass(inactive_icon).addClass(active_icon);selectedStar.prevAll('[data-value]').removeClass(inactive_icon).addClass(active_icon);selectedStar.nextAll('[data-value]').removeClass(active_icon).addClass(inactive_icon);}
function _clearValue(ratingInput,active_icon,inactive_icon){var self=$(ratingInput);self.find('[data-value]').removeClass(active_icon).addClass(inactive_icon);}
function _updateValue(input,val){input.val(val).trigger('change');if(val===input.data('empty-value')){input.siblings('.rating-clear').hide();}else{input.siblings('.rating-clear').show();}}
for(element=this.length-1;element>=0;element--){var el,i,originalInput=$(this[element]),max=originalInput.data('max')||5,min=originalInput.data('min')||0,def_val=originalInput.val()||0,lib=originalInput.data('icon-lib')||'glyphicon'
active=originalInput.data('active-icon')||'glyphicon-star',inactive=originalInput.data('inactive-icon')||'glyphicon-star-empty',clearable=originalInput.data('clearable')||null,clearable_i=originalInput.data('clearable-icon')||'glyphicon-remove',stars='';for(i=min;i<=max;i++){if(i<=def_val){stars+=['<i class="',lib,' ',active,'" data-value="',i,'"></i>'].join('');}
else{stars+=['<i class="',lib,' ',inactive,'" data-value="',i,'"></i>'].join('')}}
if(clearable){stars+=[' <a class="rating-clear" style="display:none;" href="javascript:void">','<span class="',lib,' ',clearable_i,'"></span> ',clearable,'</a>'].join('');}
var newInput=originalInput.clone(true).addClass('hidden').data('max',max).data('min',min).data('icon-lib',lib).data('active-icon',active).data('inactive-icon',inactive);el=['<div class="rating-input">',stars,'</div>'].join('');if(originalInput.parents('.rating-input').length<=0){originalInput.replaceWith($(el).append(newInput));}}
$('.rating-input').on('mouseenter','[data-value]',function(){var self=$(this);input=self.siblings('input');_paintValue(self.closest('.rating-input'),self.data('value'),input.data('active-icon'),input.data('inactive-icon'));}).on('mouseleave','[data-value]',function(){var self=$(this),input=self.siblings('input'),val=input.val(),min=input.data('min'),max=input.data('max'),active=input.data('active-icon'),inactive=input.data('inactive-icon');if(val>=min&&val<=max){_paintValue(self.closest('.rating-input'),val,active,inactive);}else{_clearValue(self.closest('.rating-input'),active,inactive);}}).on('click','[data-value]',function(e){var self=$(this),val=self.data('value'),input=self.siblings('input');_updateValue(input,val);e.preventDefault();return false;}).on('click','.rating-clear',function(e){var self=$(this),input=self.siblings('input'),active=input.data('active-icon'),inactive=input.data('inactive-icon');_updateValue(input,input.data('empty-value'));_clearValue(self.closest('.rating-input'),active,inactive);e.preventDefault();return false;}).each(function(){var input=$(this).find('input'),val=input.val(),min=input.data('min'),max=input.data('max');if(val!==""&&+val>=min&&+val<=max){_paintValue(this,val);$(this).find('.rating-clear').show();}
else{input.val(input.data('empty-value'));_clearValue(this);}});};$(function(){if($('input.rating[type=number]').length>0){$('input.rating[type=number]').rating();}});}(jQuery));