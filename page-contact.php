    <?php

/*
Contact page, hi!
*/

$icon_path = get_stylesheet_directory_uri().'/library/images/icons/';
$img_path = get_stylesheet_directory_uri().'/library/images/';

?>

<?php get_header(); ?>
            
            <div id="content">
            
                <div id="inner-content">
            
                    <div id="main" class="clearfix wrap" role="main">
                        
                        <article id="post-<?php the_ID(); ?>" <?php post_class('page-contact'); ?> role="article">

                            <header class="article-header">
                                <h1 class="page-title"><?php the_title(); ?></h1>
                                <p class="page-desc">Let's chat!</p>
                            </header>
                            
                            <hr class="page-divider" />

                            <section class="entry-content">

                                <h3>I love people and I love coffee</h3>
                                <p>...so whether or not you have a project in mind, feel free to get in touch. I'm always looking to connect with people in the web world.</p>

                                <h3>Do you like forms?</h3>
                                <p>Here ya go. This goes straight to my inbox, so I'll get back to you ASAP.</p>
                                <?php 
                                    if( function_exists( 'ninja_forms_display_form' ) ){
                                         ninja_forms_display_form( 1 ); 
                                         } ?>


                                       <!--  <div id="ninja_forms_form_1_all_fields_wrap" class="ninja-forms-all-fields-wrap">
                                            <div class="ninja-forms-required-items">Fields marked with a * are required.</div>
                                                <div class="field-wrap text-wrap label-above" id="ninja_forms_field_1_div_wrap" data-visible="1">
                                                <input type="hidden" id="ninja_forms_field_1_type" value="text">
                                                <label for="ninja_forms_field_1" id="ninja_forms_field_1_label" class="">Name <span class="ninja-forms-req-symbol">*</span></label>
                                                <input id="ninja_forms_field_1" data-mask="" name="ninja_forms_field_1" type="text" class="ninja-forms-field ninja-forms-req " value="" rel="1">
                                                <div id="ninja_forms_field_1_error" style="display:none;" class="ninja-forms-field-error">
                                                </div>
                                            </div>
                                            <div class="field-wrap text-wrap label-above" id="ninja_forms_field_2_div_wrap" data-visible="1">
                                                <input type="hidden" id="ninja_forms_field_2_type" value="text">
                                                <label for="ninja_forms_field_2" id="ninja_forms_field_2_label" class="">Email <span class="ninja-forms-req-symbol">*</span></label>
                                                <input id="ninja_forms_field_2" data-mask="" name="ninja_forms_field_2" type="text" class="ninja-forms-field ninja-forms-req " value="" rel="2">
                                                <div id="ninja_forms_field_2_error" style="display:none;" class="ninja-forms-field-error">
                                            </div>
                                        </div>
                                        <div class="field-wrap textarea-wrap label-above" id="ninja_forms_field_3_div_wrap" data-visible="1">
                                            <input type="hidden" id="ninja_forms_field_3_type" value="textarea">
                                            <label for="ninja_forms_field_3" id="ninja_forms_field_3_label" class="">Message <span class="ninja-forms-req-symbol">*</span>              </label>
                                            <textarea name="ninja_forms_field_3" id="ninja_forms_field_3" class="ninja-forms-field ninja-forms-req" rel="3"></textarea>
                                            <div id="ninja_forms_field_3_error" style="display:none;" class="ninja-forms-field-error"></div>
                                        </div>
                                        <div class="field-wrap submit-wrap label-left" id="ninja_forms_field_5_div_wrap" data-visible="1">
                                            <input type="hidden" id="ninja_forms_field_5_type" value="submit">
                                            <input type="submit" name="_ninja_forms_field_5" class="ninja-forms-field" id="ninja_forms_field_5" value="Send" rel="5">
                                            <div id="ninja_forms_field_5_error" style="display:none;" class="ninja-forms-field-error"></div>
                                        </div>
                                    </div> -->


                                <h3>Do you hate forms?</h3>
                                <p>I get that. So, fellow old fashioned folk, send your message this way:</p>
                                <p class="subsection-tagline"><a href="mailto:lara@notlaura.com">lara<span class="special-dark"> at </span>notlaura.com</a></p>

                            </section>
                            
                        </article>

                    </div>

                </div>
    
            </div>

<?php get_footer(); ?>