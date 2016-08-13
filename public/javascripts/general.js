/**
 * Created by HP on 12-08-2016.
 */

$(document).ready(function(){
    $('#ulParent').on('click','a',function(event){
        event.preventDefault();
        if($(this).attr('name') === 'result'){
            window.open($(this).attr('href'));
        }else{
            var address = $(this).attr('href');
            $.ajax({
                url: address,
                method: 'post',
                dataType: "json",
                contentType: 'application/json; charset=utf-8',
                async : true,
                data : undefined,
                success : function(result){
                    if(result.message === 'success'){
                        alert('Poll has been deleted successfully!!');
                        location.reload();
                    }else{
                        alert('Poll already deleted or error connecting with database at the moment.');
                    }
                }
            });
        }
    });
});

